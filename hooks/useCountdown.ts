"use client"

import { useState, useEffect, useCallback } from "react"

interface CountdownResult {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

export function useCountdown(targetDate: string): CountdownResult {
  const calculateTimeLeft = useCallback((): CountdownResult => {
    const target = new Date(targetDate).getTime()
    const now = new Date().getTime()
    const difference = target - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isPast: false,
    }
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState<CountdownResult>(calculateTimeLeft)

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous.isPast) return previous

        const next = calculateTimeLeft()
        if (next.isPast) {
          clearInterval(timer)
        }

        return next
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  return timeLeft
}
