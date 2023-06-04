/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string
    JWT_SECRET_KEY: string
  }
}
