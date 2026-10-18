import sharp from "sharp"

/** Width the captures are stored at — enough for a 2× card and the modal. */
export const PREVIEW_WIDTH = 960
// Very long pages are cropped so the hover-scroll stays readable and the file small.
const MAX_HEIGHT = 6000

// Runs inside the captured page: removes fixed-position layers that cover content
// (promo popups, newsletter modals, backdrops, cookie bars) but keeps fixed headers
// pinned to the top and small floating buttons.
const DISMISS_OVERLAYS = `(() => {
  const sweep = () => {
    const area = innerWidth * innerHeight
    document.querySelectorAll("body *").forEach((el) => {
      if (getComputedStyle(el).position !== "fixed") return
      const r = el.getBoundingClientRect()
      const tall = r.height > innerHeight * 0.35
      const floatingBlock = r.top > 60 && r.width * r.height > area * 0.06
      if (tall || floatingBlock) el.remove()
    })
    document.documentElement.style.overflow = "auto"
    document.body.style.overflow = "auto"
  }
  sweep()
  setInterval(sweep, 400)
})()`

/**
 * Takes a full-page screenshot of `url` through Microlink and returns it as a
 * resized WebP. Free tier: 50 requests/day (set MICROLINK_API_KEY for more).
 */
export async function captureSite(url: string, signal?: AbortSignal): Promise<Buffer> {
  const key = process.env.MICROLINK_API_KEY
  const api = new URL(key ? "https://pro.microlink.io/" : "https://api.microlink.io/")
  api.search = new URLSearchParams({
    url,
    screenshot: "true",
    "screenshot.fullPage": "true",
    "screenshot.type": "jpeg",
    "viewport.width": "1440",
    "viewport.height": "900",
    "viewport.deviceScaleFactor": "1",
    waitUntil: "networkidle2",
    waitForTimeout: "3500",
    scripts: DISMISS_OVERLAYS,
    meta: "false",
  }).toString()

  const res = await fetch(api, { headers: key ? { "x-api-key": key } : undefined, cache: "no-store", signal })
  const json = (await res.json()) as { status: string; data?: { screenshot?: { url?: string } }; message?: string }
  const shotUrl = json.data?.screenshot?.url
  if (json.status !== "success" || !shotUrl) throw new Error(`Microlink: ${json.message ?? res.status}`)

  const img = await fetch(shotUrl, { cache: "no-store", signal })
  if (!img.ok) throw new Error(`Screenshot download failed: ${img.status}`)
  const input = Buffer.from(await img.arrayBuffer())

  const { data, info } = await sharp(input)
    .resize({ width: PREVIEW_WIDTH, withoutEnlargement: true })
    .toBuffer({ resolveWithObject: true })
  return sharp(data)
    .extract({ left: 0, top: 0, width: info.width, height: Math.min(info.height, MAX_HEIGHT) })
    .webp({ quality: 72 })
    .toBuffer()
}
