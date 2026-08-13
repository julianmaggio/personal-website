import { Elysia } from 'elysia'
import { openapi } from '@elysia/openapi'
import { welcomeRoute } from './routes/welcome.js'

const isProduction = process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL)

const app = new Elysia({ 
  aot: !isProduction 
})
  .group('/api', (app) =>
    app
      .use(
        openapi({
          path: '/docs',
          documentation: {
            info: {
              title: 'Personal Website API',
              version: '1.0.0'
            },
            servers: [
              {
                url: '/api',
                description: 'Default API Server'
              }
            ]
          },
          scalar: {
            forceDarkModeState: 'light',
            hideDarkModeToggle: true,
            theme: 'light',
          },
        })
      )
      .use(welcomeRoute)
  )

if (!isProduction) {
  app.listen(3000)
  console.log('🦊 Elysia running on http://localhost:3000')
}

export default app
export type App = typeof app