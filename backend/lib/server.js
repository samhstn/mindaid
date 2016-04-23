require('env2')('./config.env')

const Hapi = require('hapi')
const helper = require('./helpers/server-helpers.js')
const server = new Hapi.Server()
const port = process.env.PORT || 4000

// server plugins
const Inert = require('inert')

// server routes
const Hello = require('./routes/Hello.js')
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')

const ConnectionSettings = { port, routes: {cors: true} }
const Plugins = [ Inert ]
const Routes = [ Hello, Images, ReactUrls, Scripts ]

server.connection(ConnectionSettings)
server.register(Plugins, helper.handlePlugins)
server.route(Routes)
server.start(helper.handleStart)

module.exports = port
