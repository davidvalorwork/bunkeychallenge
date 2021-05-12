const responses = require("./helpers/responses")
const Users     = require("../models/Users")
const log       = require("./helpers/log")
/***
 * Objecto con funciones para manejar el modelo User
 * Funciones:
 * 1. Obtener todos los Users
 * 2. Registrar un User
 * 3. Modificar un User
 * 4. Obtener un User por id
 * 5. Loguear un User
 */
module.exports = {
  getAllUsers: async (req, res) => {
    responses.success(await Users.findAll(), res)
    log(`User has consulted All Users`)
  },
  registerUser: async (req, res) => {
    try{
      const newUser = new Users(req.body)
      const error   = newUser.validateSync()
      console.log("ERROR validando",error)
      newUser.save()
      responses.success(newUser, res)
      log(`User created successfully`)
    }catch(err){
      response.error(err,res)
      log(`User get an error creating an User`)
    }
  },
  //updateUser
  //getUserById
  //login
  //register
}
