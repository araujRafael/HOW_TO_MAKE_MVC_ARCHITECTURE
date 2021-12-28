const { IndexController } = require("../controller/index.controller")

module.exports = server => {
  // CONTROLLER
  const indexController = new IndexController()
  // ROUTES INDEX
  server.get('/',indexController.get)
  server.get('/:id',indexController.getId)
  server.post('/',indexController.post)
  server.put('/',indexController.put)
  server.delete('/',indexController.delete)
  // ROUTES AUTH
  server.post('/auth',indexController.post)
}