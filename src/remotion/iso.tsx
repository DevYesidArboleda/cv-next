import type React from "react"

// Isometric projection: world (x, y, z) → screen (sx, sy). Units are px.
const COS = 0.866
const SIN = 0.5

export const iso = (x: number, y: number, z = 0): [number, number] => [(x - y) * COS, (x + y) * SIN - z]

const pts = (list: [number, number, number][]) =>
  list
    .map(([x, y, z]) => iso(x, y, z))
    .map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`)
    .join(" ")

/** Mix a hex colour towards black (amt > 0) or white (amt < 0). */
export function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16)
  const target = amt > 0 ? 0 : 255
  const a = Math.abs(amt)
  const ch = (v: number) => Math.round(v + (target - v) * a)
  const r = ch((n >> 16) & 255)
  const g = ch((n >> 8) & 255)
  const b = ch(n & 255)
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
}

type BoxProps = {
  x: number
  y: number
  z?: number
  w: number
  d: number
  h: number
  color: string
  top?: string
  opacity?: number
}

/** A shaded isometric box. Faces: top (lit), left/front (mid), right (dark). */
export const Box: React.FC<BoxProps> = ({ x, y, z = 0, w, d, h, color, top, opacity = 1 }) => (
  <g opacity={opacity}>
    <polygon
      points={pts([
        [x, y + d, z],
        [x + w, y + d, z],
        [x + w, y + d, z + h],
        [x, y + d, z + h],
      ])}
      fill={shade(color, 0.14)}
    />
    <polygon
      points={pts([
        [x + w, y, z],
        [x + w, y + d, z],
        [x + w, y + d, z + h],
        [x + w, y, z + h],
      ])}
      fill={shade(color, 0.3)}
    />
    <polygon
      points={pts([
        [x, y, z + h],
        [x + w, y, z + h],
        [x + w, y + d, z + h],
        [x, y + d, z + h],
      ])}
      fill={top ?? color}
    />
  </g>
)

/** Flat rectangle painted on the front (y = const) face plane. */
export const FrontRect: React.FC<{
  x: number
  y: number
  z: number
  w: number
  h: number
  fill: string
  opacity?: number
}> = ({ x, y, z, w, h, fill, opacity = 1 }) => (
  <polygon
    points={pts([
      [x, y, z],
      [x + w, y, z],
      [x + w, y, z + h],
      [x, y, z + h],
    ])}
    fill={fill}
    opacity={opacity}
  />
)

/** Flat rectangle painted on the side (x = const) face plane. */
export const SideRect: React.FC<{
  x: number
  y: number
  z: number
  d: number
  h: number
  fill: string
  opacity?: number
}> = ({ x, y, z, d, h, fill, opacity = 1 }) => (
  <polygon
    points={pts([
      [x, y, z],
      [x, y + d, z],
      [x, y + d, z + h],
      [x, y, z + h],
    ])}
    fill={fill}
    opacity={opacity}
  />
)

/** Vertical cylinder standing on (cx, cy, z). */
export const Cylinder: React.FC<{ cx: number; cy: number; z: number; r: number; h: number; color: string }> = ({
  cx,
  cy,
  z,
  r,
  h,
  color,
}) => {
  const [bx, by] = iso(cx, cy, z)
  const [, ty] = iso(cx, cy, z + h)
  const rx = r * 1.2247
  const ry = r * 0.7071
  return (
    <g>
      <path
        d={`M ${bx - rx} ${ty} L ${bx - rx} ${by} A ${rx} ${ry} 0 0 0 ${bx + rx} ${by} L ${bx + rx} ${ty} Z`}
        fill={shade(color, 0.2)}
      />
      <ellipse cx={bx} cy={ty} rx={rx} ry={ry} fill={color} />
    </g>
  )
}

/** The floating island every scene sits on. */
export const Island: React.FC<{ size?: number; grass: string; earth: string; children?: React.ReactNode }> = ({
  size = 240,
  grass,
  earth,
  children,
}) => {
  const h = size / 2
  return (
    <g>
      {/* soft contact shadow below the floating island */}
      <ellipse cx={0} cy={iso(0, 0, -150)[1] + 40} rx={size * 0.8} ry={size * 0.22} fill="black" opacity={0.18} />
      <Box x={-h + 20} y={-h + 20} z={-90} w={size - 40} d={size - 40} h={50} color={shade(earth, 0.15)} />
      <Box x={-h} y={-h} z={-44} w={size} d={size} h={36} color={earth} />
      <Box x={-h} y={-h} z={-8} w={size} d={size} h={8} color={grass} />
      {children}
    </g>
  )
}
