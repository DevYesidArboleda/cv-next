"use client"

import { Player, Thumbnail, type PlayerRef } from "@remotion/player"
import type { RefObject } from "react"
import { CareerFlight } from "@/remotion/CareerFlight"
import { DWELL, FPS, TOTAL_FRAMES, sceneStart } from "@/remotion/timeline"

// Split out so @remotion/player is code-split away from the initial page bundle.

export default function JourneyStage({
  playerRef,
  width,
  height,
  dark,
  initialFrame,
}: {
  playerRef: RefObject<PlayerRef | null>
  width: number
  height: number
  dark: boolean
  initialFrame: number
}) {
  return (
    <Player
      ref={playerRef}
      component={CareerFlight}
      inputProps={{ dark }}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      compositionWidth={width}
      compositionHeight={height}
      initialFrame={initialFrame}
      style={{ width: "100%", height: "100%" }}
      clickToPlay={false}
      doubleClickToFullscreen={false}
      spaceKeyToPlayOrPause={false}
      acknowledgeRemotionLicense
    />
  )
}

export function SceneThumbnail({ index, dark }: { index: number; dark: boolean }) {
  return (
    <Thumbnail
      component={CareerFlight}
      compositionWidth={1600}
      compositionHeight={1000}
      frameToDisplay={sceneStart(index) + Math.round(DWELL / 2)}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      inputProps={{ dark }}
      style={{ width: "100%" }}
    />
  )
}
