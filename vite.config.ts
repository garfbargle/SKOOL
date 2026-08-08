import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Opt every script out of Cloudflare Rocket Loader.
 *
 * Rocket Loader is a zone-level setting on the domain this deploys to, and it
 * rewrites `<script type="module">` to `type="<token>-module"` so it can run
 * the script itself later. It cannot actually re-run an ES module that way, so
 * the app never boots and the page renders blank — while the same build served
 * from *.pages.dev, which bypasses the zone, works fine.
 *
 * `data-cfasync="false"` is the documented opt-out. Doing it here rather than
 * turning Rocket Loader off keeps the fix with the code that needs it, so a
 * future deploy to any Cloudflare zone cannot resurrect this.
 */
function noRocketLoader(): Plugin {
  return {
    name: 'skool:no-rocket-loader',
    transformIndexHtml: {
      order: 'post',
      handler: (html) => html.replace(/<script(?![^>]*\bdata-cfasync\b)/g, '<script data-cfasync="false"'),
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), noRocketLoader()],
  // Tauri expects a fixed port and doesn't like the dev server clearing the screen
  clearScreen: false,
  server: { port: 5273, strictPort: true },
  build: {
    target: 'es2022',
    sourcemap: false,
    // Courses are deliberately NOT merged into one chunk: each is reached via
    // import.meta.glob and should stay its own lazily-fetched file, so opening
    // one lesson never downloads the whole K-12 curriculum.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
