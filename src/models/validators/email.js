/***
 * Funcion encargada de:
 * 1. Realizar la validacion de un string y verifica si es un email valido
 * 2. Devolver true si es valido o false si es invalido
 * Recibe:
 * @param {string} email El email a validar
 */
module.exports = (email) => {
  const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  return pattern.test(email)
}
