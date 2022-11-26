import mongoose, { model, Schema, Types } from "mongoose";

 mongoose.connect('mongodb+srv://admin:admin@sprint3backend.5giwgea.mongodb.net/sprint3?retryWrites=true&w=majority')
    .then(() => console.log("Conectado a mongoDB"))
    .catch((err) => console.error(err)) 

/* mongoose.connect('mongodb://localhost:27017/sprint3')
    .then(() => console.log("Conectado a mongoDB"))
    .catch((err) => console.error(err))
 */
const esquema = mongoose.Schema({
    prodName: String,
    prodValue: Number,
    stock: Number
})
const esquemaVentas = mongoose.Schema({
    producto: String,
    valor: Number,
    cantidad: Number

})
const esquemaUserProds = mongoose.Schema({
    producto: String,
    valor: Number,
    cantidad: Number
})
const esquemaCarrito = mongoose.Schema({
    producto: String,
    valor: Number,
    cantidad: Number
})
const esquemaLoginAdmin = mongoose.Schema({
    email: String,
    password: String
})
const esquemaLoginUser = mongoose.Schema({
    email: String,
    password: String
})
const modeloProductos = mongoose.model('productos', esquema)
const modeloVentas = mongoose.model('ventas', esquemaVentas)
const modeloCarrito = mongoose.model('carritos', esquemaCarrito)
const modeloUserProds = mongoose.model('productos', esquema)
const modeloLoginAdmin = mongoose.model('admins', esquemaLoginAdmin)
const modeloLoginUser = mongoose.model('users', esquemaLoginUser)
export async function actualizar(id) {
    let iddb = await modeloProductos.findOne({ _id: id })
    console.log(iddb)
    return iddb

}
export let autenticacionUsuario = async (email, password) => {
    let document = await modeloLoginUser.findOne({$and:[{email:email}, {password:password}]})
    return document
}
export let autenticacionAdmin = async (email, password) => {
    let document = await modeloLoginAdmin.findOne({$and:[{email:email}, {password:password}]})
    return document
}
export async function listarProductos() {
    let prods = await modeloProductos.find()
    return prods
}
export async function listarVentas() {
    let ventas = await modeloVentas.find()
    return ventas
}
export async function carrito() {
    let carritoprods = await modeloCarrito.find()
    return carritoprods
}
export async function UserProds() {
    let userprods = await modeloUserProds.find()
    return userprods
}
export async function eliminarprod(idprodjson) {
    let idprod = idprodjson.prodid
    let prodeliminar = await modeloCarrito.deleteOne({ _id: idprod })
    return prodeliminar
}

export async function modificar(datosMod) {
    let idmodif = datosMod.id
    let documento = await modeloProductos.updateOne({ _id: idmodif }, {
        $set: {
            prodName: datosMod.nombre,
            prodValue: datosMod.precio,
            stock: datosMod.cantidad
        }
    })
    console.log(documento)
    return idmodif
}
export async function agregar(datosadd) {
    let documento = new modeloProductos({
        prodName: datosadd.nombre,
        prodValue: datosadd.precio,
        stock: datosadd.cantidad

    })
    await documento.save()
    console.log(documento)
}

export async function agregarprodventa(){

    let consCarrito = await modeloCarrito.find()
    let documento = await modeloVentas.insertMany(consCarrito)
    let removerCarrito = await modeloCarrito.removeAllListeners()
}

export async function agregarprodcar(datosaddcar) {
    let newstockprod = datosaddcar.stock - 1
    let addcantcar = datosaddcar.stock - datosaddcar.stock + 1 
    let stockVerif = await modeloProductos.findOne({ _id: datosaddcar._id })
    let consCarrito = await modeloCarrito.findOne({producto: datosaddcar.prodName})
    console.log(stockVerif.stock)
    if(stockVerif.stock > 0){
        let modStock = await modeloProductos.updateOne({ _id: datosaddcar._id }, {
            $set: {
                stock: newstockprod
            }
        })
        console.log(consCarrito)
        if(consCarrito != null && consCarrito.producto == datosaddcar.prodName){
            let valorTotal = consCarrito.valor * (consCarrito.cantidad + 1)
            let documento = await modeloCarrito.updateOne({ producto: datosaddcar.prodName }, {
                $set: {
                    cantidad: consCarrito.cantidad + 1,
                    valor: valorTotal
                }
            })
        }
        else{
            
            let documento = new modeloCarrito({
                producto: datosaddcar.prodName,
                valor: datosaddcar.prodValue,
                cantidad: addcantcar
                
            })
            await documento.save()
        }
    }
    else{
        console.log("Fuera de stock")
    }
}


