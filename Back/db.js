import mongoose, { Schema, Types } from "mongoose";

mongoose.connect('mongodb+srv://admin:admin@sprint3backend.5giwgea.mongodb.net/sprint3?retryWrites=true&w=majority')
    .then(() => console.log("Conectado a mongoDB"))
    .catch((err) => console.error(err))


const esquema = mongoose.Schema({
    prodName: String,
    prodValue: Number,
    stock: Number
})
const esquemaVentas = mongoose.Schema({
    prodName: String,
    prodValue: Number,
    stock: Number
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
const modeloProductos = mongoose.model('productos', esquema)
const modeloVentas = mongoose.model('ventas', esquemaVentas)
const modeloCarrito = mongoose.model('carritos', esquemaCarrito)
const modeloUserProds = mongoose.model('userproductos', esquemaUserProds)
export async function actualizar(id) {
    let iddb = await modeloProductos.findOne({ _id: id })
    console.log(iddb)
    return iddb

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
export async function agregarprodcar(datosaddcar) {
    let documento = new modeloCarrito({
        producto: datosaddcar.producto,
        valor: datosaddcar.valor,
        cantidad: datosaddcar.cantidad

    })
    await documento.save()
    console.log(documento)
}


