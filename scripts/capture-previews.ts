// Captures the bundled fallback screenshots in public/ (used when the live capture is unavailable).
// Usage: npm run previews  (only captures projects whose fallback file is missing)
import { existsSync } from "node:fs"
import { writeFile } from "node:fs/promises"
import path from "node:path"
import { projects } from "../src/data/profile"
import { captureSite } from "../src/lib/screenshot"

async function main() {
  for (const p of projects) {
    const target = path.join(process.cwd(), "public", p.image)
    if (existsSync(target)) continue
    process.stdout.write(`${p.title} … `)
    try {
      await writeFile(target, await captureSite(p.url))
      console.log(`ok → public${p.image}`)
    } catch (err) {
      console.log(`failed: ${(err as Error).message}`)
    }
  }
}

main()
