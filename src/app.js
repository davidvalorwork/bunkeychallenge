// Importando configuraciones globales
const configs = require("../config.json")

// Importando modulos 
const express = require("express")
const routes  = require("./routes")
const mongo   = require( "./models")
const cors    = require("cors")

// Inicializando express
const app = express()

// Configurando cors
app.use(cors({origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Configurando ambiente
const environment = process.argv[2] !== undefined ? process.argv[2] : '--dev'
const config = configs[environment]

// Realizando conexion con mongo
mongo(config.MONGO)

// Inicializando rutas
routes(app)

// Inicializando Servidor
app.listen(config.PORT,() => console.log(`Api listening at port ${config.PORT}`))
