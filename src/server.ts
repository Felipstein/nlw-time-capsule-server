import 'dotenv/config'

import { resolve } from 'path'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fstatic from '@fastify/static'

import { memoriesRoutes } from './routes/memories.routes'
import { authRoutes } from './routes/auth.routes'
import { uploadRoutes } from './routes/upload.routes'

const app = fastify()

app.register(multipart)

app.register(fstatic, {
  root: resolve(__dirname, '..', 'uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  // origin: true, // todas URLs de front-end poderão acessar nosso back-end
  origin: ['http://localhost:3000'],
})

app.register(jwt, {
  secret: process.env.JWT_SECRET_KEY!,
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
