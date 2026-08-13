import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { SpeedInsights } from '@vercel/speed-insights/react'

export function App() {
  return (
    <main>
      <h1>Julian Maggio</h1>

      <p>
        Building things for the web. This site is currently under construction, but the engine behind it is already running.
      </p>

      <p>
        If you are an engineer or curious human, you can explore the backend directly via <a href="/api">/api</a>.
      </p>

      <div className="meta">
        <p>
          Source code hosted on{' '}
          <a
            href="https://github.com/julianmaggio/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
)