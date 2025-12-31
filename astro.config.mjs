import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

const site = "https://natewong.dev"

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind(), react(), mdx(), sitemap()],
})
