"use client"

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { Expand, Pause, PictureInPicture2, Play, Settings2, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

function getMimeType(url: string) {
  if (url.endsWith(".webm")) return "video/webm"
  if (url.endsWith(".mp4")) return "video/mp4"
  return "video/webm"
}

export function StyledVideoPlayer({
  src,
  poster,
  title,
  accent = "#C9A84C",
  className,
}: {
  src: string
  poster?: string
  title: string
  accent?: string
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isPipSupported, setIsPipSupported] = useState(false)
  const [isPipActive, setIsPipActive] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    setIsPipSupported("pictureInPictureEnabled" in document)

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onTimeUpdate = () => setCurrentTime(video.currentTime)
    const onLoadedMetadata = () => setDuration(video.duration || 0)
    const onVolumeChange = () => {
      setVolume(video.volume)
      setIsMuted(video.muted)
    }
    const onRateChange = () => setPlaybackRate(video.playbackRate)
    const onEnterPip = () => setIsPipActive(true)
    const onLeavePip = () => setIsPipActive(false)
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement))

    video.addEventListener("play", onPlay)
    video.addEventListener("pause", onPause)
    video.addEventListener("timeupdate", onTimeUpdate)
    video.addEventListener("loadedmetadata", onLoadedMetadata)
    video.addEventListener("volumechange", onVolumeChange)
    video.addEventListener("ratechange", onRateChange)
    video.addEventListener("enterpictureinpicture", onEnterPip)
    video.addEventListener("leavepictureinpicture", onLeavePip)
    document.addEventListener("fullscreenchange", onFullscreenChange)

    return () => {
      video.removeEventListener("play", onPlay)
      video.removeEventListener("pause", onPause)
      video.removeEventListener("timeupdate", onTimeUpdate)
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      video.removeEventListener("volumechange", onVolumeChange)
      video.removeEventListener("ratechange", onRateChange)
      video.removeEventListener("enterpictureinpicture", onEnterPip)
      video.removeEventListener("leavepictureinpicture", onLeavePip)
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.load()
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
  }, [src])

  const progress = useMemo(() => {
    if (!duration || Number.isNaN(duration)) return 0
    return Math.min(100, (currentTime / duration) * 100)
  }, [currentTime, duration])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) await video.play()
    else video.pause()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
  }

  const handleSeek = (value: string) => {
    const video = videoRef.current
    if (!video || !duration) return
    const next = Number(value)
    video.currentTime = (next / 100) * duration
  }

  const handleVolume = (value: string) => {
    const video = videoRef.current
    if (!video) return
    const next = Number(value)
    video.volume = next
    video.muted = next === 0
  }

  const handleRate = (value: string) => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = Number(value)
  }

  const togglePip = async () => {
    const video = videoRef.current
    if (!video || !("pictureInPictureEnabled" in document)) return
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture()
      return
    }
    await video.requestPictureInPicture()
  }

  const toggleFullscreen = async () => {
    const video = videoRef.current
    if (!video) return
    const wrapper = video.closest(".tilin-video-shell") as HTMLElement | null
    if (!document.fullscreenElement && wrapper) {
      await wrapper.requestFullscreen()
      return
    }
    if (document.fullscreenElement) await document.exitFullscreen()
  }

  const style = {
    "--tilin-video-accent": accent,
  } as CSSProperties

  return (
    <div className={cn("tilin-video-shell", className)} style={style} aria-label={`Video ${title}`}>
      <video ref={videoRef} className="tilin-video-element" preload="metadata" poster={poster} playsInline>
        <source src={src} type={getMimeType(src)} />
      </video>

      <button type="button" onClick={togglePlay} className="tilin-video-play-center" aria-label={isPlaying ? "Pausar video" : "Reproducir video"}>
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </button>

      <div className="tilin-video-controls">
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={(event) => handleSeek(event.target.value)}
          className="tilin-video-progress"
          aria-label="Progreso del video"
        />

        <div className="tilin-video-controls-row">
          <button type="button" onClick={togglePlay} className="tilin-video-btn" aria-label={isPlaying ? "Pausar" : "Reproducir"}>
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>

          <span className="tilin-video-time">{formatTime(currentTime)} / {formatTime(duration)}</span>

          <button type="button" onClick={toggleMute} className="tilin-video-btn" aria-label={isMuted ? "Activar sonido" : "Silenciar"}>
            {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={(event) => handleVolume(event.target.value)}
            className="tilin-video-volume"
            aria-label="Volumen"
          />

          <label className="tilin-video-speed" aria-label="Velocidad de reproduccion">
            <Settings2 className="h-4 w-4" />
            <select value={playbackRate} onChange={(event) => handleRate(event.target.value)}>
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </label>

          {isPipSupported ? (
            <button type="button" onClick={togglePip} className="tilin-video-btn" aria-label={isPipActive ? "Cerrar PiP" : "Abrir PiP"}>
              <PictureInPicture2 className="h-4 w-4" />
            </button>
          ) : null}

          <button type="button" onClick={toggleFullscreen} className="tilin-video-btn" aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}>
            <Expand className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function formatTime(value: number) {
  if (!value || Number.isNaN(value)) return "00:00"
  const mins = Math.floor(value / 60)
  const secs = Math.floor(value % 60)
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}
