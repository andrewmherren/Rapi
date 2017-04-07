'use strict'
// import controllers
const systemController = require('./controllers/systemController')
const exampleController = require('./controllers/exampleController')

// export the routing function for use by server.js
exports.routes = function (app) {
  /**
  * System level API routes
  */
  app.get('/system', systemController.get)
  app.post('/system', systemController.post)

  /**
  * Example API routes
  */
  app.get('/example', exampleController.get)
}
