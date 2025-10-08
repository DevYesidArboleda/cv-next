"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const lines = [
    "> Hola! soy Yesid Banguera",
    "> Desarrollador Full Stack_",
    "> Creando experiencias web únicas_",
    "> Transformando ideas en código_",
  ]

  useEffect(() => {
    const currentLine = lines[currentLineIndex]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentCharIndex < currentLine.length) {
          // Typing forward
          setDisplayedText(currentLine.substring(0, currentCharIndex + 1))
          setCurrentCharIndex((prev) => prev + 1)
        } else if (!isDeleting && currentCharIndex === currentLine.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && currentCharIndex > 0) {
          // Deleting
          setDisplayedText(currentLine.substring(0, currentCharIndex - 1))
          setCurrentCharIndex((prev) => prev - 1)
        } else if (isDeleting && currentCharIndex === 0) {
          // Move to next line
          setIsDeleting(false)
          setCurrentLineIndex((prev) => (prev + 1) % lines.length)
        }
      },
      isDeleting ? typingSpeed : currentCharIndex === currentLine.length ? pauseTime : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentLineIndex, isDeleting])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-8 md:p-12 shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-4">terminal@devye:~</span>
            </div>

            {/* Terminal content */}
            <div className="font-mono space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance min-h-[1.2em]">
                <span className="text-primary">{displayedText}</span>
                <span className="animate-pulse text-secondary">|</span>
              </h1>
              <div className="space-y-2 text-lg md:text-xl text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Especializado en Vtex & Next.js</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Diseño UI/UX minimalista</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Soluciones full-stack escalables</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
