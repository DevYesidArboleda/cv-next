// Shared between the Remotion composition and the scroll-scrub wrapper so the
// HTML copy stays frame-synced with the camera.
export const FPS = 30
export const SCENE_COUNT = 5
export const INTRO = 45 // establishing shot: whole world → first island
export const DWELL = 70 // camera settles on an island (copy is fully visible here)
export const TRANS = 50 // pull up, fly over the world, descend into the next island

export const sceneStart = (i: number) => INTRO + i * (DWELL + TRANS)
export const sceneEnd = (i: number) => sceneStart(i) + DWELL
export const TOTAL_FRAMES = sceneEnd(SCENE_COUNT - 1) + 20

/** Opacity curve for the HTML copy of scene `i` at `frame`. */
export function copyOpacity(i: number, frame: number) {
  const s = sceneStart(i)
  const e = sceneEnd(i)
  const fadeIn = i === 0 ? INTRO * 0.6 : TRANS * 0.45
  const fadeOut = TRANS * 0.45
  if (frame < s - fadeIn) return 0
  if (frame < s) return (frame - (s - fadeIn)) / fadeIn
  if (frame <= e || i === SCENE_COUNT - 1) return 1
  if (frame < e + fadeOut) return 1 - (frame - e) / fadeOut
  return 0
}
