const passwordValidator = require("./validators/password")
const emailValidator = require("./validators/email")
const mongoose       = require("mongoose")
module.exports = mongoose.model("User", new mongoose.Schema({
  name: {type:String, required:true},
  email: {
    type:String, 
    validator: {
      validator: (email) => Promise.resolve(emailValidator(email)),
      message: 'Email validation failed'
    },
  },
  password: {
    type: String,
    validator: {
      validator: (password) => Promise.resolve(passwordValidator(password)),
      message: 'Password validation failed'
    }
  },
  deleted: {type: Boolean, default: false}
}))
