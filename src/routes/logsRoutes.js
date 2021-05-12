const responses = require("../controllers/helpers/responses")
const Logs      = require("../models/Logs")
const route     = '/logs'
module.exports = (app) => {
  app.get(`${route}/`, async (req, res) => responses.success(await Logs.find(),res))
}
