'use client'

import { useEffect, useRef } from 'react'

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    if (ctx) {
      const width = canvas.width
      const height = canvas.height
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const val = Math.floor(Math.random() * 255)
        data[i] = val      // Red
        data[i + 1] = val  // Green
        data[i + 2] = val  // Blue
        data[i + 3] = 35   // Alpha (out of 255) — lower = softer
      }

      ctx.putImageData(imageData, 0, 0)
    }

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
      }}
    />
  )
}
