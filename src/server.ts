// importa o express
import express from 'express'

import './typeorm'
// cria o servidor
let servidor = express()
servidor.use(express.json())

//converte dados da requisição para Json

//importa as rotas 
import router from './routes'
servidor.use(router) //servidor vai usar nossas rotas 


// coloca o servidor para escutar na porta 3333 e aguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})