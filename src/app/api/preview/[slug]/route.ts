import { readFile } from "node:fs/promises"
import path from "node:path"
import { projects } from "@/data/profile"
import { captureSite } from "@/lib/screenshot"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
// A capture takes ~10–25 s; give serverless hosts room before they cut the request.
export const maxDuration = 60

const DAY = 60 * 60 * 24

// Per-instance memory cache; the CDN (s-maxage) absorbs nearly all traffic on top of it.
const cache = new Map<string, { at: number; body: Buffer }>()
const inflight = new Map<string, Promise<Buffer>>()

function image(body: Buffer, type: string, maxAge: number, source: "live" | "fallback") {
  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": type,
      "Cache-Control": `public, max-age=${Math.min(maxAge, 3600)}, s-maxage=${maxAge}, stale-while-revalidate=${DAY * 7}`,
      "X-Preview-Source": source,
    },
  })
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return new Response("Not found", { status: 404 })

  const hit = cache.get(slug)
  if (hit && Date.now() - hit.at < DAY * 1000) return image(hit.body, "image/webp", DAY, "live")

  try {
    let job = inflight.get(slug)
    if (!job) {
      job = captureSite(project.url, AbortSignal.timeout(45_000))
      inflight.set(slug, job)
    }
    const body = await job
    cache.set(slug, { at: Date.now(), body })
    return image(body, "image/webp", DAY, "live")
  } catch (err) {
    console.error(`[preview] ${slug}:`, err)
    if (hit) return image(hit.body, "image/webp", 600, "live")
    // Serve the bundled screenshot, but only cache it briefly so a live capture is retried soon.
    const file = await readFile(path.join(process.cwd(), "public", project.image))
    const type = project.image.endsWith(".webp") ? "image/webp" : "image/png"
    return image(file, type, 600, "fallback")
  } finally {
    inflight.delete(slug)
  }
}
