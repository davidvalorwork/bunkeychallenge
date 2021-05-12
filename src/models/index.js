const mongoose = require("mongoose")
/***
 * Funcion encargada de:
 * 1. Realizar conexion con Base de Datos Mongo
 * Recibe:
 * @param {string} mongoLink El link de la instancia de mongo a conectar.
 */
module.exports = (mongoLink) => {
  mongoose.connect(mongoLink, {useNewUrlParser: true, useUnifiedTopology: true})
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => console.log(`Mongo is connected successfully`))
}
