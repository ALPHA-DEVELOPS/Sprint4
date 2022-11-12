import React from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
function ListVentas(){
    const [estadoProd, setEstadoProd] = useState([])

    fetch('http://localhost:5000/qventas',{
        method: 'get',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify()
    })
        .then((res) => res.json())
        .then(produc => {setEstadoProd(produc)})
    return(
        <div className="addProduct">

        <h1>
            Listar productos
        </h1>
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Producto</th>
          <th>Valor</th>
          <th>Cantidad</th>
          <th>Fecha</th>

        </tr>
      </thead>
      <tbody>
        
            {
                estadoProd.map(item => {
                    
                    return(
                        
                        
                        <tr key={item._id}>
                            <td>{item.IdVenta}</td>
                            <td>{item.IdCliente}</td>
                            <td>{item.Producto}</td>
                            <td>{item.Valor}</td>
                            <td>{item.Cantidad}</td>
                            <td>{item.Fecha}</td>
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

export default ListVentas
