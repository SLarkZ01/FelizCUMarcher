"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type WebcamPixelGridProps = {
  gridCols?: number
  gridRows?: number
  maxElevation?: number
  motionSensitivity?: number
  elevationSmoothing?: number
  colorMode?: "webcam" | "monochrome"
  monochromeColor?: string
  backgroundColor?: string
  mirror?: boolean
  gapRatio?: number
  invertColors?: boolean
  darken?: number
  borderColor?: string
  borderOpacity?: number
  className?: string
  onWebcamError?: (error: Error) => void
  onWebcamReady?: () => void
}

type PixelData = {
  r: number
  g: number
  b: number
  motion: number
  targetElevation: number
  currentElevation: number
}

export function WebcamPixelGrid({
  gridCols = 64,
  gridRows = 48,
  maxElevation = 15,
  motionSensitivity = 0.4,
  elevationSmoothing = 0.1,
  colorMode = "webcam",
  monochromeColor = "#00ff88",
  backgroundColor = "#0a0a0a",
  mirror = true,
  gapRatio = 0.1,
  invertColors = false,
  darken = 0,
  borderColor = "#ffffff",
  borderOpacity = 0.08,
  className,
  onWebcamError,
  onWebcamReady,
}: WebcamPixelGridProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const processingCanvasRef = useRef<HTMLCanvasElement>(null)
  const displayCanvasRef = useRef<HTMLCanvasElement>(null)
  const previousFrameRef = useRef<Uint8ClampedArray | null>(null)
  const pixelDataRef = useRef<PixelData[][]>([])
  const animationRef = useRef<number>(0)
  const streamRef = useRef<MediaStream | null>(null)

  const [isReady, setIsReady] = useState(false)

  const monoRGB = useMemo(() => {
    const hex = monochromeColor.replace("#", "")
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    }
  }, [monochromeColor])

  const borderRGB = useMemo(() => {
    const hex = borderColor.replace("#", "")
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    }
  }, [borderColor])

  useEffect(() => {
    pixelDataRef.current = Array.from({ length: gridRows }, () =>
      Array.from({ length: gridCols }, () => ({
        r: 30,
        g: 30,
        b: 30,
        motion: 0,
        targetElevation: 0,
        currentElevation: 0,
      }))
    )
  }, [gridCols, gridRows])

  const requestCameraAccess = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: "user",
        },
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setIsReady(true)
        onWebcamReady?.()
      }
    } catch (error) {
      const webcamError =
        error instanceof Error ? error : new Error("Webcam access denied")
      onWebcamError?.(webcamError)
    }
  }, [onWebcamError, onWebcamReady])

  useEffect(() => {
    requestCameraAccess()

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [requestCameraAccess])

  const render = useCallback(() => {
    const video = videoRef.current
    const processingCanvas = processingCanvasRef.current
    const displayCanvas = displayCanvasRef.current

    if (!video || !processingCanvas || !displayCanvas || video.readyState < 2) {
      animationRef.current = requestAnimationFrame(render)
      return
    }

    const procCtx = processingCanvas.getContext("2d", {
      willReadFrequently: true,
    })
    const dispCtx = displayCanvas.getContext("2d")

    if (!procCtx || !dispCtx) {
      animationRef.current = requestAnimationFrame(render)
      return
    }

    processingCanvas.width = gridCols
    processingCanvas.height = gridRows

    procCtx.save()
    if (mirror) {
      procCtx.scale(-1, 1)
      procCtx.drawImage(video, -gridCols, 0, gridCols, gridRows)
    } else {
      procCtx.drawImage(video, 0, 0, gridCols, gridRows)
    }
    procCtx.restore()

    const imageData = procCtx.getImageData(0, 0, gridCols, gridRows)
    const currentData = imageData.data
    const previousData = previousFrameRef.current

    const pixels = pixelDataRef.current
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const idx = (row * gridCols + col) * 4
        const r = currentData[idx]
        const g = currentData[idx + 1]
        const b = currentData[idx + 2]
        const pixel = pixels[row]?.[col]

        if (!pixel) {
          continue
        }

        let motion = 0
        if (previousData) {
          const prevR = previousData[idx]
          const prevG = previousData[idx + 1]
          const prevB = previousData[idx + 2]
          const diff =
            Math.abs(r - prevR) + Math.abs(g - prevG) + Math.abs(b - prevB)
          motion = Math.min(1, diff / 255 / motionSensitivity)
        }

        pixel.motion = pixel.motion * 0.7 + motion * 0.3

        let finalR = r
        let finalG = g
        let finalB = b

        if (colorMode === "monochrome") {
          const brightness = (r + g + b) / 3 / 255
          finalR = Math.round(monoRGB.r * brightness)
          finalG = Math.round(monoRGB.g * brightness)
          finalB = Math.round(monoRGB.b * brightness)
        }

        if (invertColors) {
          finalR = 255 - finalR
          finalG = 255 - finalG
          finalB = 255 - finalB
        }

        if (darken > 0) {
          const darkenFactor = 1 - darken
          finalR = Math.round(finalR * darkenFactor)
          finalG = Math.round(finalG * darkenFactor)
          finalB = Math.round(finalB * darkenFactor)
        }

        pixel.r = finalR
        pixel.g = finalG
        pixel.b = finalB
        pixel.targetElevation = pixel.motion * maxElevation
        pixel.currentElevation +=
          (pixel.targetElevation - pixel.currentElevation) * elevationSmoothing
      }
    }

    previousFrameRef.current = new Uint8ClampedArray(currentData)

    const dpr = window.devicePixelRatio || 1
    const displayWidth = displayCanvas.clientWidth
    const displayHeight = displayCanvas.clientHeight

    displayCanvas.width = displayWidth * dpr
    displayCanvas.height = displayHeight * dpr
    dispCtx.scale(dpr, dpr)

    dispCtx.fillStyle = backgroundColor
    dispCtx.fillRect(0, 0, displayWidth, displayHeight)

    const cellSize = Math.max(displayWidth / gridCols, displayHeight / gridRows)
    const gap = cellSize * gapRatio

    const gridWidth = cellSize * gridCols
    const gridHeight = cellSize * gridRows
    const offsetXGrid = (displayWidth - gridWidth) / 2
    const offsetYGrid = (displayHeight - gridHeight) / 2

    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const pixel = pixels[row]?.[col]
        if (!pixel) {
          continue
        }

        const x = offsetXGrid + col * cellSize
        const y = offsetYGrid + row * cellSize
        const elevation = pixel.currentElevation
        const offsetX = -elevation * 1.2
        const offsetY = -elevation * 1.8

        if (elevation > 0.5) {
          dispCtx.fillStyle = `rgba(0, 0, 0, ${Math.min(0.6, elevation * 0.04)})`
          dispCtx.fillRect(
            x + gap / 2 + elevation * 1.5,
            y + gap / 2 + elevation * 2,
            cellSize - gap,
            cellSize - gap
          )

          dispCtx.fillStyle = `rgb(${Math.max(0, pixel.r - 80)}, ${Math.max(0, pixel.g - 80)}, ${Math.max(0, pixel.b - 80)})`
          dispCtx.beginPath()
          dispCtx.moveTo(x + cellSize - gap / 2 + offsetX, y + gap / 2 + offsetY)
          dispCtx.lineTo(x + cellSize - gap / 2, y + gap / 2)
          dispCtx.lineTo(x + cellSize - gap / 2, y + cellSize - gap / 2)
          dispCtx.lineTo(
            x + cellSize - gap / 2 + offsetX,
            y + cellSize - gap / 2 + offsetY
          )
          dispCtx.closePath()
          dispCtx.fill()

          dispCtx.fillStyle = `rgb(${Math.max(0, pixel.r - 50)}, ${Math.max(0, pixel.g - 50)}, ${Math.max(0, pixel.b - 50)})`
          dispCtx.beginPath()
          dispCtx.moveTo(x + gap / 2 + offsetX, y + cellSize - gap / 2 + offsetY)
          dispCtx.lineTo(x + gap / 2, y + cellSize - gap / 2)
          dispCtx.lineTo(x + cellSize - gap / 2, y + cellSize - gap / 2)
          dispCtx.lineTo(
            x + cellSize - gap / 2 + offsetX,
            y + cellSize - gap / 2 + offsetY
          )
          dispCtx.closePath()
          dispCtx.fill()
        }

        const brightness = 1 + elevation * 0.05
        dispCtx.fillStyle = `rgb(${Math.min(255, Math.round(pixel.r * brightness))}, ${Math.min(255, Math.round(pixel.g * brightness))}, ${Math.min(255, Math.round(pixel.b * brightness))})`
        dispCtx.fillRect(
          x + gap / 2 + offsetX,
          y + gap / 2 + offsetY,
          cellSize - gap,
          cellSize - gap
        )

        dispCtx.strokeStyle = `rgba(${borderRGB.r}, ${borderRGB.g}, ${borderRGB.b}, ${borderOpacity + elevation * 0.008})`
        dispCtx.lineWidth = 0.5
        dispCtx.strokeRect(
          x + gap / 2 + offsetX,
          y + gap / 2 + offsetY,
          cellSize - gap,
          cellSize - gap
        )
      }
    }

    animationRef.current = requestAnimationFrame(render)
  }, [
    backgroundColor,
    borderOpacity,
    borderRGB.b,
    borderRGB.g,
    borderRGB.r,
    colorMode,
    darken,
    elevationSmoothing,
    gapRatio,
    gridCols,
    gridRows,
    invertColors,
    maxElevation,
    mirror,
    monoRGB.b,
    monoRGB.g,
    monoRGB.r,
    motionSensitivity,
  ])

  useEffect(() => {
    if (!isReady) {
      return
    }

    animationRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [isReady, render])

  return (
    <div className={cn("relative h-full w-full", className)}>
      <video
        ref={videoRef}
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        playsInline
        muted
      />
      <canvas
        ref={processingCanvasRef}
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />
      <canvas
        ref={displayCanvasRef}
        className={cn(
          "h-full w-full transition-opacity duration-1000",
          isReady ? "opacity-100" : "opacity-0"
        )}
        style={{ backgroundColor }}
      />
    </div>
  )
}
