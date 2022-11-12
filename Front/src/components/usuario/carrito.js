import React from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function Carrito() {
    var acum = 0

    function eliminarProdCarrito(idprod) {
        let idprodjson = { prodid: idprod }
        fetch('http://localhost:5000/eliminar', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(idprodjson)
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
                            <th>Cantidad</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody id="rowprod">

                        {
                            estadoCarrito.map((item, index) => {

                                return (

                                    <tr key={index}>
                                        <td id={index}>{item._id}</td>
                                        <td>{item.producto}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.valor}</td>
                                        <td><Button onClick={() => eliminarProdCarrito(item._id)} variant="danger">X</Button></td>
                                    </tr>
                                )
                            }
                            )
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{estadoCarrito.map((elem, ind) => {
                                acum += elem.valor
                                if(ind+1 === estadoCarrito.length){
                                    return acum
                                }
                            })
                            }
                                
                            </td>
                            <td><b>Total</b></td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={()=> alert("Compra realizada")} variant='success'>Comprar</Button>
            </div>
        </div>
    )
}

export default Carrito