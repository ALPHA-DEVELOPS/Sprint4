import Express from "express";
import cors from 'cors' 
const app = Express()

app.use(cors())
app.listen('5000', function(){
    console.log("Servidor iniciado.")
})


app.get('/consultar', function(pet, res){
    console.log("Conectado al servidor")
    res.send("Conectado")
})
