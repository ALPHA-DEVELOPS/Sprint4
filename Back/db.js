import mongoose, { Schema, Types } from "mongoose";

mongoose.connect('mongodb+srv://admin:admin@sprint3backend.5giwgea.mongodb.net/sprint3?retryWrites=true&w=majority')
.then( () => console.log("Conectado a mongoDB"))
.catch((err) => console.error(err))


const esquema = mongoose.Schema({
    prodName:String,
    prodValue:Number,
    stock:Number
})
const modeloProductos = mongoose.model('productos',esquema)
export async function actualizar(id){
    let iddb = await modeloProductos.findOne({_id:id})
    return iddb
    
}

