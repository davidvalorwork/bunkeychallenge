const mongoose = require("mongoose")
module.exports = mongoose.model("Course", new mongoose.Schema({
  name: {type:String, required:true},
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  deleted: {type: Boolean, default: false}
}))
