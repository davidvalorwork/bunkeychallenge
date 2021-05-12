const mongoose = require("mongoose")
module.exports = mongoose.model("Log", new mongoose.Schema({
  log: {type:String, required:true},
}))
