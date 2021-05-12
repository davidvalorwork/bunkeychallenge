const Users = require("../Users")
/***
 * Funcion encargada de:
 * 1. Realizar la validacion de un string y verifica si es un email valido
 * 2. Validar si el email esta disponible y evitar duplicados
 * 3. Devolver true si es valido, 1 si fallo el email y 2 si fallo el password
 * Recibe:
 * @param {string} email El email a validar
 */
module.exports = async (email) => {
  const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  const usersWithSameEmail = await Users.find({ email, deleted:false })
  return pattern.test(email) && usersWithSameEmail.length === 0
}
