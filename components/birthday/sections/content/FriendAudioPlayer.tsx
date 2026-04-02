"use client"

import type { CSSProperties } from "react"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player"

function withAlpha(hex: string, alpha: number) {
  const raw = hex.replace("#", "")
  if (raw.length !== 6) return `rgba(201, 168, 76, ${alpha})`

  const r = parseInt(raw.slice(0, 2), 16)
  const g = parseInt(raw.slice(2, 4), 16)
  const b = parseInt(raw.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function FriendAudioPlayer({ src, name, accent }: { src: string; name: string; accent: string }) {
  const playerStyle = {
    "--tilin-accent": accent,
    "--tilin-accent-strong": withAlpha(accent, 0.95),
    "--tilin-accent-soft": withAlpha(accent, 0.35),
  } as CSSProperties

  return (
    <AudioPlayer
      src={src}
      preload="metadata"
      showSkipControls={false}
      showJumpControls={false}
      customAdditionalControls={[]}
      customVolumeControls={[RHAP_UI.VOLUME]}
      layout="stacked"
      className="tilin-audio-player"
      style={playerStyle}
      customIcons={{
        play: <Play className="h-4 w-4" />,
        pause: <Pause className="h-4 w-4" />,
        volume: <Volume2 className="h-4 w-4" />,
        volumeMute: <VolumeX className="h-4 w-4" />,
      }}
      aria-label={`Mensaje de audio de ${name}`}
    />
  )
}
