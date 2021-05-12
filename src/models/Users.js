const emailValidator = require("./validators/email")
const mongoose       = require("mongoose")
module.exports = mongoose.model("User", new mongoose.Schema({
  name:       { type:String,    required:true       },
  email:      { type:String,    required:true       },
  password:   { type: String,   required: true      },
  lastActive: { type: Date,     default: new Date() },
  deleted:    { type: Boolean,  default: false      },
  createdAt:  { type: Date,     default: new Date() },
  updatedAt:  { type: Date,     default: new Date() }
}))
