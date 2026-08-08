import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
