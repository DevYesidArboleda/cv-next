import type React from "react"
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion"
import { SCENES } from "./scenes"
import { DWELL, INTRO, SCENE_COUNT, TRANS, sceneEnd, sceneStart } from "./timeline"

export type CareerFlightProps = { dark: boolean }

// Island centres in world (screen-space) coordinates — a winding route.
const ISLANDS: [number, number][] = [
  [0, 0],
  [560, -250],
  [1120, 40],
  [1680, -250],
  [2240, 30],
]
const WORLD_CENTER: [number, number] = [1120, -110]
const WORLD_SPAN = 2700
const ISLAND_SPAN = 430

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const easeInOut = Easing.inOut(Easing.cubic)
const clamp01 = (t: number) => Math.min(1, Math.max(0, t))

// Seeded specks for the parallax backdrop.
const SPECKS = Array.from({ length: 70 }, (_, i) => {
  const r = (n: number) => {
    const x = Math.sin(i * 127.1 + n * 311.7) * 43758.5453
    return x - Math.floor(x)
  }
  return { x: r(1) * 4200 - 1000, y: r(2) * 1800 - 1000, s: 1 + r(3) * 2.5, o: 0.25 + r(4) * 0.5 }
})

type Camera = { cx: number; cy: number; zoom: number; rot: number; focus: number }

/** The camera rig: establishing shot → dive → (pull up, fly, descend) × N. */
function cameraAt(frame: number, zin: number, zOverview: number): Camera {
  const drift = (i: number, u: number): [number, number] => [ISLANDS[i][0] + (u - 0.5) * 24, ISLANDS[i][1] - 45 + (u - 0.5) * -10]

  if (frame < INTRO) {
    const t = easeInOut(clamp01(frame / INTRO))
    const [tx, ty] = drift(0, 0)
    return {
      cx: lerp(WORLD_CENTER[0], tx, t),
      cy: lerp(WORLD_CENTER[1], ty, t),
      zoom: Math.exp(lerp(Math.log(zOverview), Math.log(zin), t)),
      rot: lerp(-4, 0, t),
      focus: t,
    }
  }

  for (let i = 0; i < SCENE_COUNT; i++) {
    const s = sceneStart(i)
    const e = sceneEnd(i)
    if (frame <= e || i === SCENE_COUNT - 1) {
      const u = clamp01((frame - s) / DWELL)
      const [cx, cy] = drift(i, u)
      return { cx, cy, zoom: zin * (1 + 0.07 * u), rot: 0, focus: 1 }
    }
    if (frame < e + TRANS) {
      const t = (frame - e) / TRANS
      const k = easeInOut(t)
      const [ax, ay] = drift(i, 1)
      const [bx, by] = drift(i + 1, 0)
      const hop = Math.sin(Math.PI * t)
      return {
        cx: lerp(ax, bx, k),
        cy: lerp(ay, by, k) - hop * 60,
        zoom: lerp(zin * 1.1, zin, k) * (1 - 0.5 * hop),
        rot: hop * (i % 2 ? -3 : 3),
        focus: 1,
      }
    }
  }
  return { cx: 0, cy: 0, zoom: zin, rot: 0, focus: 1 }
}

export const CareerFlight: React.FC<CareerFlightProps> = ({ dark }) => {
  const frame = useCurrentFrame()
  const { width, height } = useVideoConfig()
  const portrait = height > width

  const zin = (portrait ? width * 0.86 : Math.min(width * 0.4, height * 0.85)) / ISLAND_SPAN
  const zOverview = portrait ? (width * 1.6) / WORLD_SPAN : Math.min((width * 0.92) / WORLD_SPAN, (height * 0.7) / 700)
  const cam = cameraAt(frame, zin, zOverview)

  // Where on screen the active island sits (copy lives in the remaining space).
  const fx = width * lerp(0.5, portrait ? 0.5 : 0.66, cam.focus)
  const fy = height * lerp(portrait ? 0.55 : 0.62, portrait ? 0.4 : 0.5, cam.focus)

  const ink = dark ? "255,255,255" : "31,38,51"
  const routeColor = dark ? "rgba(255,255,255,0.22)" : "rgba(31,38,51,0.2)"

  const route = ISLANDS.map(([x, y], i) => {
    if (i === 0) return `M ${x} ${y + 150}`
    const [px, py] = ISLANDS[i - 1]
    return `Q ${(px + x) / 2} ${(py + y) / 2 + (i % 2 ? 260 : -160)} ${x} ${y + 150}`
  }).join(" ")

  return (
    <AbsoluteFill>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="cf-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4fd1b0" stopOpacity={dark ? 0.16 : 0.14} />
            <stop offset="100%" stopColor="#4fd1b0" stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* far parallax layer */}
        <g transform={`translate(${fx - cam.cx * cam.zoom * 0.25} ${fy - cam.cy * cam.zoom * 0.25})`}>
          {SPECKS.map((p, i) => (
            <circle key={i} cx={p.x * 0.5} cy={p.y * 0.5} r={p.s} fill={`rgba(${ink},${p.o * 0.5})`} />
          ))}
        </g>

        <g transform={`translate(${fx} ${fy}) rotate(${cam.rot}) scale(${cam.zoom}) translate(${-cam.cx} ${-cam.cy})`}>
          {ISLANDS.map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y + 40} rx={420} ry={300} fill="url(#cf-glow)" />
          ))}
          <path d={route} fill="none" stroke={routeColor} strokeWidth={5} strokeDasharray="4 18" strokeLinecap="round" />

          {ISLANDS.map(([x, y], i) => {
            const Scene = SCENES[i]
            const bob = Math.sin(frame / 36 + i * 1.7) * 5
            const near = interpolate(
              frame,
              [sceneStart(i) - TRANS - 20, sceneStart(i) - 10, sceneEnd(i) + 10, sceneEnd(i) + TRANS + 20],
              [0.55, 1, 1, 0.55],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            )
            return (
              <g key={i} transform={`translate(${x} ${y + bob})`} opacity={frame < INTRO ? 1 : 0.5 + near * 0.5}>
                <Scene f={frame} l={frame - sceneStart(i)} />
              </g>
            )
          })}
        </g>
      </svg>
    </AbsoluteFill>
  )
}
