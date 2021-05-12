// Importando configuraciones globales
const config  = require("./config.json")[process.argvs[2]]

// Importando modulos 
const express = require("express")
const cors    = require("cors")

// Inicializando express
const app = express()

// Configurando cors
app.use(cors({origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Inicializando rutas

// Inicializando Servidor
app.listen(config.PORT,() => console.log(`App listening at port ${config.PORT}`))
