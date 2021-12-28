const { UserController } = require("../controller/user.controller")

module.exports = server => {
  // CONTROLLER
  const userController = new UserController()
  // ROUTES USER
  server.get('/user',userController.getAllUsers)
  server.get('/user/:id',userController.getUserById)
  server.put('/user',userController.editPass)
  server.delete('/user',userController.deleteUser)
  // ROUTES SIGNUP
  server.post('/signup',userController.createUser)
  // ROUTES SIGNIN
  server.post('/signin',userController.loginUser)

}