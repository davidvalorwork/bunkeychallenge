const messages         = require("./helpers/messages")
const validateEmail    = require("../models/validators/email")
const validatePassword = require("../models/validators/password")
const responses        = require("./helpers/responses")
const Users            = require("../models/Users")
const log              = require("./helpers/log")
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
  /***
   * Funcion encargada de:
   * 1. Retornar todos los usuarios del sistema
   */
  getAllUsers: async (req, res) => {
    responses.success(await Users.find(), res)
    log(`User has consulted All Users`)
  },
  /***
   * Funcion encargada de:
   * 1. Registrar un usuario en el sistema
   * Parametros:
   * @param {string} name     Nombre del usuario
   * @param {string} email    Email del usuario
   * @param {string} password Contraseña del usuario
   */
  registerUser: async (req, res) => {
    try{
      if(await validateEmail(req.body.email) && validatePassword(req.body.password)){
        const newUser = new Users(req.body)
        newUser.save()
        responses.success(newUser, res)
        log(`User created successfully`)
      }else responses.error(messages.invalidDataError, res)
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
