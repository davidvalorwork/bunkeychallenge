const UserController = require("../controllers/UserController")
const route = "users"
module.exports = (app) => {
  app.get (`${route}/`, (req, res) => UserController.getAllUsers(req, res))
  app.post(`${route}/`, (req, res) => UserController.registerUser(req, res))
}
