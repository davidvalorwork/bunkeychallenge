// Importando configuraciones globales
const environment = process.argv[2]!==undefined?process.argv[2]:'--dev' // Ambiente a utilizar: produccion, desarrollo, testing
const config      = require("../config.json")[environment]

// Importando modulos 
const express = require("express")
const cors    = require("cors")
const models  = require("./models")

// Inicializando express
const app = express()

// Configurando cors
app.use(cors({origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Inicializando modelos
models(config.MONGO)

// Inicializando rutas

// Inicializando Servidor
app.listen(config.PORT,() => console.log(`Api listening at port ${config.PORT}`))
