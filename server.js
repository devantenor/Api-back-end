const express = require('express')
const App = express()
const porta = 3000
App.listen(porta,()=> {
    console.log(`servidor rodando na porta ${porta}`)
})

App.get('/',(req,res) => {
    res.send('minha primeira response go sucessible')
})

App.get('/teste',(req,res) => {
    res.send('meu primeiro teste funcionando!!!!')
})
