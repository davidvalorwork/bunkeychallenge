const mongoose = require("mongoose")
module.exports = mongoose.model("Course", new mongoose.Schema({
  name: {type:String, required:true},
  deleted: {type: Boolean, default: false}
}))
