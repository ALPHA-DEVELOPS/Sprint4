import Express, { response } from "express";
import './db.js'
import cors from 'cors' 
import path from "path";
import { agregarprodventa, actualizar, modificar, listarProductos, listarVentas, carrito, UserProds, eliminarprod, agregar,agregarprodcar, autenticacionAdmin, autenticacionUsuario} from "./db.js";
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

app.post('/autenticacion', function (req, resp) {
    console.log(req.body)
    if(req.body.userType == true){
        let datos = autenticacionUsuario(req.body.email, req.body.password)
        .then(data => credenciales(data))
        .catch(err => console.log(err))
    }
    else {
        let datos = autenticacionAdmin(req.body.email, req.body.password)
        .then(data => credenciales(data))
        .catch(err => console.log(err))
    }     

    function credenciales (data) {
        if (data != null){            
            console.log("Credenciales correctas")
            resp.send(data)
        }
        else {  
            resp.send({email:""})         
            console.log("Credenciales incorrectas")
        }
    }
})
app.post('/consultar', function(pet, res){
    let datos = pet.body
    let iddb = actualizar(datos.id)
    .then(datos => res.send(datos))
    .catch((err) => res.send(err))

    
})
app.post('/modificar', function(pet, res){
    let datosMod = pet.body
    console.log(datosMod)
    let idmodif = modificar(datosMod)
    .then(datosMod => res.send(datosMod))
})
app.post('/agregar', function(pet, res){
    let datosadd = pet.body
    console.log(datosadd)
    let idmodif = agregar(datosadd)
    .then(datosadd => res.send(datosadd))
    .catch(err => console.error(err))
})
app.post('/addprodscar', function(pet, res){
    let datosaddcar = pet.body
    console.log(datosaddcar)
    let idmodif = agregarprodcar(datosaddcar)
    .then(datosaddcar => res.send(datosaddcar))
    .catch(err => console.error(err))
})
app.post('/addVentas', function(pet,res){
    let datosaddventa = pet.body
    console.log(datosaddventa)
    let idmodif = agregarprodventa(datosaddventa)
    .then(datosaddventa => res.send(datosaddventa))
    .catch(err => console.error(err))
})
app.delete('/eliminar', function(pet, res){
    let prodeliminar = pet.body
    let eliminar = eliminarprod(prodeliminar)
    .then(prodeliminar => res.send(prodeliminar))
    .catch(err=>console.error(err))
})
app.get('/qprods', function(pet, res){

    let produc = listarProductos()    
    .then(produc => res.send(produc))
    .catch(err=>console.error(err))
})
app.get('/qventas', function(pet, res){
    
    let ventas = listarVentas()    
    .then(ventas => res.send(ventas))
    .catch(err=>console.error(err))
})

app.get('/userprods', function(pet, res){
    
    let userproducts = UserProds()    
    .then(userproducts => res.send(userproducts))
    .catch(err=>console.error(err))
})
app.get('/carrito', function(pet, res){
    let prodCarrito = carrito()
    .then(prodCarrito => res.send(prodCarrito))
    .catch(err=>console.error(err))
})

