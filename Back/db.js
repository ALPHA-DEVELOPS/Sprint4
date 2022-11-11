import mongoose, { Schema, Types } from "mongoose";

mongoose.connect('mongodb+srv://admin:admin@sprint3backend.5giwgea.mongodb.net/sprint3?retryWrites=true&w=majority')
.then( () => console.log("Conectado a mongoDB"))
.catch((err) => console.error(err))


const esquema = mongoose.Schema({
    prodName:String,
    prodValue:Number,
    stock:Number
})
const esquemaVentas = mongoose.Schema({
    prodName:String,
    prodValue:Number,
    stock:Number
})
const modeloProductos = mongoose.model('productos',esquema)
const modeloVentas = mongoose.model('ventas',esquema)
export async function actualizar(id){
    let iddb = await modeloProductos.findOne({_id:id})
    console.log(iddb)
    return iddb
    
}
export async function listarProductos(){ 
    let prods = await modeloProductos.find()
    return prods
}
export async function listarVentas(){ 
    let ventas = await modeloVentas.find()
    return ventas
}

export async function modificar(datosMod){
    let idmodif = datosMod.id
        let documento = await modeloProductos.updateOne({_id:idmodif},{
            $set:{
                prodName: datosMod.nombre,
                prodValue: datosMod.precio,
                stock: datosMod.cantidad
            }
        })
        console.log(documento)
    return idmodif
}


