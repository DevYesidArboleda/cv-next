import { Composition } from "remotion"
import { CareerFlight } from "./CareerFlight"
import { FPS, TOTAL_FRAMES } from "./timeline"

// Studio entry (`npm run video`) — the website embeds the same component via <Player>.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CareerFlight"
        component={CareerFlight}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ dark: true }}
      />
      <Composition
        id="CareerFlightVertical"
        component={CareerFlight}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{ dark: true }}
      />
    </>
  )
}
