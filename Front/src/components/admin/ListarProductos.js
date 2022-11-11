import React from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
function ListProducts() {
    const [estadoProd, setEstadoProd] = useState([])

    fetch('http://localhost:5000/qprods', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
        .then((res) => res.json())
        .then(produc => { setEstadoProd(produc) })
    return (
        <div className="addProduct">

            <h1>
                Listar productos
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
                    <tbody>

                        {
                            estadoProd.map(item => {

                                return (

                                    <tr>
                                        <td>{item._id}</td>
                                        <td>{item.prodName}</td>
                                        <td>{item.prodValue}</td>
                                        <td>{item.stock}</td>
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

export default ListProducts