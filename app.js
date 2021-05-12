// Importando modulos 
const express = require("express")
const cors    = require("cors")

// Inicializando express
const app = express()

// Configurando cors
app.use(cors({origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
