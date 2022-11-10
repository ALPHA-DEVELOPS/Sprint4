import Express, { response } from "express";
import './db.js'
import cors from 'cors' 
import path from "path";
import { actualizar } from "./db.js";
const app = Express()
const dirBack = path.resolve() 
const dirFront = path.join(dirBack, "../Frontend") 
app.use(Express.static('../Frontend'))
app.use(Express.json())
app.use(cors())
app.use(Express.json())
app.listen('5000', function(){
    console.log("Servidor iniciado.")
})

app.post('/consultar', function(pet, res){
    let datos = pet.body
    let iddb = actualizar(datos.id)
    .then(datos => res.send(datos))
    .catch(err => res.send({error:"Usuario no existe"}))

    
})


