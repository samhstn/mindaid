require('env2')('./config.env')

var x = 5

const Hapi = require('hapi')
const helper = require('./helpers/server-helpers.js')
const messagebird = require('messagebird')(process.env.API_KEY)
const server = new Hapi.Server()
const port = process.env.PORT || 4000

// server plugins
const Inert = require('inert')

// server routes
const Hello = require('./routes/Hello.js')
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')
const MessageBird = {
  path: '/sendText',
  method: 'POST',
  handler: (request, reply) => {
    const params = {
      originator: '+447860039046',
      recipients: [
      '00447590490239'
      ],
      body: 'Hi Helen, remember to check up on Billy today'
    }
    setTimeout(message, 30000)
    function message() {
      messagebird.messages.create(params, (err, response) => {
       console.log(err ? err : response)
      })
    }
    reply('BAZINGAAAA')
  }
}

const ConnectionSettings = { port, routes: {cors: true} }
const Plugins = [ Inert ]
const Routes = [ Hello, Images, MessageBird, Scripts, ReactUrls ]

server.connection(ConnectionSettings)
server.register(Plugins, helper.handlePlugins)
server.route(Routes)

const handleStart = (err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ', port)
  }
}

server.start(handleStart)

module.exports = port
