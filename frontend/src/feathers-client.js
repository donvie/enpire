const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const io = require('socket.io-client')
const auth = require('@feathersjs/authentication-client')

const socket = io('http://23.91.115.133:8080/')
// const socket = io('http://localhost:8080/')
const feathersClient = feathers()

feathersClient.configure(socketio(socket, { timeout: 120000, transports: ['websocket'] }))

feathersClient.configure(auth({
  storage: window.localStorage
}))

export { feathersClient }
