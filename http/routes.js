'use strict'
// import controllers
const systemController = require('./controllers/systemController')
const exampleController = require('./controllers/exampleController')

// export the routing function for use by server.js
exports.routes = function (app) {
  /**
  * System level API routes
  */
  app.get('/api/system', systemController.get)
  app.post('/api/system', systemController.post)

  /**
  * Example API routes
  */
  app.get('/api/example', exampleController.get)
}
