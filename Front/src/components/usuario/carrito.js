import React from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function Carrito() {


    async function eliminarProdCarrito(idprod){
        let idprodjson = {prodid:idprod}
        fetch('http://localhost:5000/eliminar',{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(idprodjson)
    })
    .then(res => console.log("exito"))
}
    const [estadoCarrito, setEstadoCarrito] = useState([])

    fetch('http://localhost:5000/carrito', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
    .then((res) => res.json())
    .then(carritoprods => { setEstadoCarrito(carritoprods) })
   
    return (
        <div className="addProduct">

            <h1>
                Carrito
            </h1>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Valor</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody id="rowprod">

                        {
                            estadoCarrito.map((item, index) => {

                                return (

                                    <tr key={index}>
                                        <td id={index}>{item._id}</td>
                                        <td>{item.producto}</td>
                                        <td>{item.valor}</td>
                                        <td>{item.cantidad}</td>
                                        <td><Button onClick={()=> eliminarProdCarrito(item._id)} variant="danger">X</Button></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Carrito