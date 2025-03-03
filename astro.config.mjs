import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

const setLayout = () => {
  return function (_, file) {
    file.data.astro.frontmatter.layout =
      file.data.astro.frontmatter.layout || "@layouts/blog-layout.astro"
  }
}
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    remarkPlugins: [setLayout],
  },
})

