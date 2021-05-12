/***
 * Funcion encargada de:
 * 1. Realizar la validacion de un string y verifica si es un password fuerte y seguro
 * 2. Devolver true si es valido o false si es invalido
 * Verifica:
 * 1. Minimo 8 caracteres
 * 2. Una letra minuscula
 * 3. Una letra mayuscula
 * 4. Un caracter especial
 * Recibe:
 * @param {string} email El email a validar
 */
module.exports = (password) => {
  const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
  return pattern.test(password)
}

