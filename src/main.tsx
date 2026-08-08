import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import { applyTheme, usePrefs } from './lib/store'

// Re-apply on boot so the persisted preference wins over the inline guess,
// and keep 'system' live if the OS theme changes while the app is open.
applyTheme(usePrefs.getState().theme)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (usePrefs.getState().theme === 'system') applyTheme('system')
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Hash routing so deep links survive both the Cloudflare edge and the
        Tauri custom protocol without any server-side rewrite. */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
