import { ConnectionOptions } from 'mongoose'
// const {
//   MONGO_USERNAME = 'admin',
//   MONGO_PASSWORD = 'secret',
//   MONGO_HOST = 'localhost',
//   MONGO_PORT = 27017,
//   MONGO_DATAGBGASE = 'auth'
// } = process.env

//! Mlab config
const {
  MONGO_USERNAME = 'dev',
  MONGO_PASSWORD = 'devpass1',
  MONGO_HOST = 'ds147052.mlab.com',
  MONGO_PORT = 47052,
  MONGO_DATAGBGASE = 'api-dev'
} = process.env

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATAGBGASE}`

export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
