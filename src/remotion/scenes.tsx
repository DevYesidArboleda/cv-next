import type React from "react"
import { Easing, interpolate } from "remotion"
import { Box, Cylinder, FrontRect, Island, SideRect, iso, shade } from "./iso"

export const PALETTE = {
  earth: "#b98d67",
  slate: "#3d4656",
  ink: "#1f2633",
  teal: "#4fd1b0",
  coral: "#f0876a",
  amber: "#f4c26b",
  blue: "#6aa8f0",
  purple: "#a594f9",
  cream: "#f6efe2",
  kraft: "#d9a66b",
  leaf: "#6fbf7e",
  vtex: "#f71963",
  red: "#e45757",
}

const C = PALETTE

type SceneProps = {
  /** Global frame — used for looping "alive" details. */
  f: number
  /** Frame relative to this scene's arrival — used for build-up moments. */
  l: number
}

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const
const pop = Easing.out(Easing.back(1.6))

/** Drop-in height offset for stacked props, staggered by index. */
const drop = (l: number, i: number, from = 120) =>
  interpolate(l, [-30 + i * 7, -6 + i * 7], [from, 0], { ...clamp, easing: Easing.out(Easing.bounce) })

/** Props that fall into place stay hidden until the camera is close. */
const appear = (l: number, i: number) => interpolate(l, [-34 + i * 7, -26 + i * 7], [0, 1], clamp)

const Tree: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g>
    <Box x={x} y={y} w={8 * s} d={8 * s} h={18 * s} color="#8a6446" />
    <Box x={x - 8 * s} y={y - 8 * s} z={18 * s} w={24 * s} d={24 * s} h={26 * s} color={C.leaf} />
    <Box x={x - 3 * s} y={y - 3 * s} z={44 * s} w={14 * s} d={14 * s} h={12 * s} color={shade(C.leaf, -0.15)} />
  </g>
)

/* 2018 — systems: Linux servers, databases, WordPress */
export const ServersScene: React.FC<SceneProps> = ({ f, l }) => {
  const racks = [-90, -46, -2]
  return (
    <Island grass="#a9cfa1" earth={C.earth}>
      <Tree x={-100} y={60} />
      {racks.map((rx, idx) => {
        const h = interpolate(l, [-36 + idx * 6, -4 + idx * 6], [20, 112], { ...clamp, easing: pop })
        return (
          <g key={rx}>
            <Box x={rx} y={-90} w={38} d={52} h={h} color={C.slate} />
            {Array.from({ length: 6 }).map((_, k) => {
              const z = 12 + k * 16
              if (z + 8 > h) return null
              const on = (f + k * 7 + idx * 11) % 26 < 14
              return (
                <g key={k}>
                  <FrontRect x={rx + 4} y={-38} z={z} w={24} h={7} fill={shade(C.slate, -0.18)} />
                  <FrontRect x={rx + 30} y={-38} z={z + 1} w={5} h={5} fill={k % 3 ? C.teal : C.amber} opacity={on ? 1 : 0.25} />
                </g>
              )
            })}
          </g>
        )
      })}
      {[0, 1, 2].map((k) => (
        <g key={k} transform={`translate(0 ${-drop(l, k + 2, 80)})`} opacity={appear(l, k + 2)}>
          <Cylinder cx={62} cy={36} z={k * 26} r={30} h={20} color={k === 1 ? C.blue : C.teal} />
        </g>
      ))}
      <Box x={10} y={70} w={44} d={30} h={4} color={C.cream} />
      <Box x={18} y={74} z={4} w={28} d={20} h={3} color={C.blue} />
    </Island>
  )
}

/* 2020 — custom software: Angular, PHP/.NET, Azure */
export const CloudScene: React.FC<SceneProps> = ({ f, l }) => {
  const bob = Math.sin(f / 14) * 6
  const lines = Math.floor((f / 5) % 9)
  const [cx, cy] = iso(30, -40, 190)
  return (
    <Island grass="#b9d5ec" earth={C.earth}>
      <Tree x={70} y={-100} s={0.9} />
      {/* desk + monitor */}
      <Box x={-86} y={-30} w={96} d={54} h={40} color="#c99a6b" />
      <Box x={-74} y={-20} z={40} w={66} d={6} h={50} color={C.slate} />
      <FrontRect x={-70} y={-14} z={44} w={58} h={42} fill={C.ink} />
      {Array.from({ length: lines }).map((_, k) => (
        <FrontRect
          key={k}
          x={-66 + (k % 3) * 4}
          y={-14}
          z={80 - k * 4.2}
          w={14 + ((k * 13) % 30)}
          h={2.2}
          fill={[C.teal, C.purple, C.amber, C.blue][k % 4]}
        />
      ))}
      <Box x={-50} y={50} w={28} d={28} h={20} color={C.coral} />
      <Box x={-50} y={74} z={20} w={28} d={4} h={26} color={C.coral} />
      {/* tech stack cubes drop in on arrival */}
      {[C.red, C.purple, C.blue].map((col, k) => (
        <g key={k} transform={`translate(0 ${-drop(l, k)})`} opacity={appear(l, k)}>
          <Box x={40} y={10} z={k * 32} w={34} d={34} h={32} color={col} />
        </g>
      ))}
      {/* data packets travelling desk ↔ cloud */}
      {[0, 1].map((k) => {
        const z = 100 + ((f * 2.2 + k * 45) % 90)
        return <Box key={k} x={30} y={-40} z={z} w={10} d={10} h={10} color={k ? C.amber : C.teal} />
      })}
      <g transform={`translate(${cx} ${cy + bob})`} opacity={0.97}>
        <ellipse cx={0} cy={0} rx={64} ry={26} fill="#ffffff" />
        <circle cx={-22} cy={-16} r={26} fill="#ffffff" />
        <circle cx={14} cy={-24} r={32} fill="#ffffff" />
        <circle cx={40} cy={-6} r={20} fill="#ffffff" />
        <ellipse cx={0} cy={12} rx={58} ry={10} fill="#dfe8f3" />
      </g>
    </Island>
  )
}


/* 2021 — VTEX IO e-commerce stores */
export const StoreScene: React.FC<SceneProps> = ({ f, l }) => {
  const cartX = -110 + ((f * 1.6) % 200)
  return (
    <Island grass="#f2d49b" earth={C.earth}>
      <Box x={-96} y={-96} w={150} d={100} h={82} color={C.cream} />
      <Box x={-102} y={-102} z={82} w={162} d={112} h={10} color={C.coral} />
      <Box x={-50} y={-50} z={92} w={70} d={8} h={24} color={C.vtex} />
      <FrontRect x={-44} y={-42} z={100} w={58} h={8} fill="#ffffff" opacity={0.9} />
      {/* awning stripes */}
      {Array.from({ length: 10 }).map((_, k) => (
        <FrontRect key={k} x={-96 + k * 15} y={4} z={58} w={15} h={12} fill={k % 2 ? "#ffffff" : C.coral} />
      ))}
      <FrontRect x={-86} y={4} z={14} w={34} h={34} fill="#bfe0ff" />
      <FrontRect x={-40} y={4} z={0} w={26} h={44} fill={C.slate} />
      <FrontRect x={4} y={4} z={14} w={34} h={34} fill="#bfe0ff" />
      <SideRect x={54} y={-80} z={18} d={30} h={30} fill="#bfe0ff" opacity={0.85} />
      {/* parcels pile up on arrival */}
      {[
        [62, 20, 0],
        [86, 20, 0],
        [72, 26, 26],
      ].map(([x, y, z], k) => (
        <g key={k} transform={`translate(0 ${-drop(l, k)})`} opacity={appear(l, k)}>
          <Box x={x} y={y} z={z} w={24} d={24} h={24} color={C.kraft} />
        </g>
      ))}
      {/* shopping cart rolling past the storefront */}
      <g>
        <Box x={cartX} y={60} z={10} w={30} d={20} h={16} color={C.teal} />
        <Box x={cartX} y={60} z={26} w={30} d={20} h={2} color={shade(C.teal, 0.2)} />
        <Box x={cartX + 2} y={62} w={5} d={5} h={6} color={C.ink} />
        <Box x={cartX + 23} y={62} w={5} d={5} h={6} color={C.ink} />
        <Box x={cartX + 12} y={66} z={28} w={10} d={10} h={10} color={C.amber} />
      </g>
      <Tree x={-110} y={70} s={0.85} />
    </Island>
  )
}

/* 2023 — web apps with Next.js */
export const AppsScene: React.FC<SceneProps> = ({ f, l }) => {
  const show = (k: number) => interpolate(l, [-24 + k * 6, -10 + k * 6], [0, 1], clamp)
  const spin = Math.sin(f / 18)
  return (
    <Island grass="#c9bff6" earth={C.earth}>
      {/* browser window */}
      <Box x={-100} y={-70} w={160} d={10} h={130} color="#ffffff" />
      <FrontRect x={-100} y={-60} z={114} w={160} h={16} fill={C.slate} />
      {[0, 1, 2].map((k) => (
        <FrontRect key={k} x={-94 + k * 9} y={-60} z={119} w={5} h={5} fill={[C.coral, C.amber, C.teal][k]} />
      ))}
      <FrontRect x={-90} y={-60} z={70} w={140} h={36} fill={C.teal} opacity={show(0)} />
      <FrontRect x={-82} y={-60} z={92} w={60} h={6} fill="#ffffff" opacity={show(0)} />
      {[C.purple, C.amber, C.blue].map((col, k) => (
        <FrontRect key={k} x={-90 + k * 48} y={-60} z={14} w={42} h={48} fill={col} opacity={show(k + 1)} />
      ))}
      {/* phone */}
      <Box x={72} y={-20} w={38} d={6} h={74} color={C.slate} />
      <FrontRect x={75} y={-14} z={6} w={32} h={62} fill={C.ink} />
      <FrontRect x={78} y={-14} z={36} w={26} h={8} fill={C.teal} opacity={show(2)} />
      <FrontRect x={78} y={-14} z={14} w={26} h={18} fill={C.purple} opacity={show(3)} />
      {/* component blocks assembling */}
      {[
        [-40, 46, 0, C.teal],
        [-10, 46, 0, C.coral],
        [-25, 46, 26, C.amber],
      ].map(([x, y, z, col], k) => (
        <g key={k} transform={`translate(0 ${-drop(l, k + 2)})`} opacity={appear(l, k + 2)}>
          <Box x={x as number} y={y as number} z={z as number} w={26} d={26} h={26} color={col as string} />
        </g>
      ))}
      <g transform={`translate(${iso(70, 70, 40)[0]} ${iso(70, 70, 40)[1] + spin * 5})`}>
        <ellipse rx={22} ry={8} fill="none" stroke={C.blue} strokeWidth={3} transform={`rotate(${f * 2})`} />
        <ellipse rx={22} ry={8} fill="none" stroke={C.blue} strokeWidth={3} transform={`rotate(${f * 2 + 60})`} />
        <ellipse rx={22} ry={8} fill="none" stroke={C.blue} strokeWidth={3} transform={`rotate(${f * 2 + 120})`} />
        <circle r={4} fill={C.blue} />
      </g>
    </Island>
  )
}

/* Today — 35+ projects delivered */
export const TodayScene: React.FC<SceneProps> = ({ f, l }) => {
  const lit = interpolate(l, [-20, 50], [0, 35], clamp)
  const pulse = (f % 40) / 40
  const [tx, ty] = iso(-88, -88, 150)
  return (
    <Island grass="#9fe3cf" earth={C.earth}>
      <Box x={-106} y={-106} w={36} d={36} h={140} color={C.slate} />
      <Box x={-110} y={-110} z={140} w={44} d={44} h={8} color={C.teal} />
      <circle cx={tx} cy={ty} r={14 + pulse * 40} fill="none" stroke={C.teal} strokeWidth={3} opacity={1 - pulse} />
      <circle cx={tx} cy={ty} r={9} fill={C.teal} />
      {/* waving flag */}
      <path
        d={`M ${tx} ${ty - 10} L ${tx} ${ty - 70} Q ${tx + 22} ${ty - 70 + Math.sin(f / 6) * 6} ${tx + 44} ${ty - 62} L ${tx + 44} ${ty - 38} Q ${tx + 22} ${ty - 46 + Math.sin(f / 6) * 6} ${tx} ${ty - 46} Z`}
        fill={C.coral}
      />
      <line x1={tx} y1={ty - 8} x2={tx} y2={ty - 72} stroke={C.ink} strokeWidth={3} />
      {Array.from({ length: 35 }).map((_, k) => {
        const col = k % 7
        const row = Math.floor(k / 7)
        const on = k < lit
        return (
          <Box
            key={k}
            x={-46 + col * 21}
            y={-50 + row * 21}
            w={17}
            d={17}
            h={on ? 10 + ((k * 7) % 4) * 4 : 4}
            color={on ? (k % 5 === 0 ? C.amber : C.teal) : "#e9dfc9"}
          />
        )
      })}
    </Island>
  )
}

export const SCENES = [ServersScene, CloudScene, StoreScene, AppsScene, TodayScene]
