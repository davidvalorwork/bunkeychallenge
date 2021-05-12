const logsRoutes = require("./logsRoutes")
const userRoutes = require("./userRoutes")
module.exports = (app) => {
  logsRoutes(app)
  userRoutes(app)
}
