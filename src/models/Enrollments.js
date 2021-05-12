const mongoose = require("mongoose")
module.exports = mongoose.model("Enrollment", new mongoose.Schema({
  course: {type: mongoose.Schema.Types.ObjectId, required:true},
  students: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required:true
    },
    credits:[{type: String}]
  }],
  deleted: {type: Boolean, default: false}
}))
