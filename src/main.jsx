import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import blockDevTools from './utils/devToolsBlocker'

// Block developer tools only if environment variable is true
if (import.meta.env.VITE_BLOCK_DEV_TOOLS === 'true') {
  blockDevTools()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
