import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { memoriesRoutes } from './routes/memories.routes'
import { authRoutes } from './routes/auth.routes'

const app = fastify()

app.register(cors, {
  // origin: true, // todas URLs de front-end poderão acessar nosso back-end
  origin: ['http://localhost:3000'],
})

app.register(jwt, {
  secret: process.env.JWT_SECRET_KEY!,
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
