const wines = require('./wines')
const express = require('express')
const port = process.env.port || 3000
const app = express()

//Recupero el array de Vinos
const vinos = wines()

//Mensaje de bienvenida y uso de la API de Vinos
app.get('/', (req, res) => {
const bienvenida = {mensajes: "Bienvenido a la API de vinos.", uso: "Solicite los vinos a través de esta API filtrando por Categoría, Varietal, o Bodega. O ingresa /all, para obtener todas las botellas disponibles."}
res.send(bienvenida)
})

//Envío todas las opciones disponibles
app.get('/all', (req, res) => {
res.send(vinos)
})

//Filtro por categoría de vino, especificando la misma por parámetro
app.get('/categoria/:cat', (req, res) => {
    const categoria = vinos.filter(c => c.categoria == req.params.cat)
    if (categoria.length == 0)
    return res.send({error: "No se encontró la categoría especificada."})
    res.send(categoria)
})

//Filtro por Varietal de vino, especificando el mismo por parámetro
app.get('/varietal/:vari', (req, res) => {
    const varietal = vinos.filter(c => c.varietal.includes(req.params.vari))
    if (varietal.length == 0)
    return res.send({error: "No se encontró el varietal especificado."})
    res.send(varietal)
})

app.listen(port, ()=> {
console.log(`Servidor disponible en el puerto ${port}`)
})