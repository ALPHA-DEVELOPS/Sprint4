import React from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../../styles/userStyle.css'
function ListProductsUser() {
    const [estadoProd, setEstadoProd] = useState([])

    fetch('http://localhost:5000/userprods', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
        .then((res) => res.json())
        .then(produc => { setEstadoProd(produc) })

    function addprodcarrito(item){
        fetch('http://localhost:5000/addprodscar',{
            method: 'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(item)
        })
        .then((res)=> console.log("exito"))
        .then(err=> console.error("Fallo"))
    }
    return (
        <div className="addProduct">

            <h1>
                Listar productos
            </h1>
            <div>
            {
                            estadoProd.map((item, index) => {

                                return (
                                    <div className="productoVisual">
                                        <img src={item.img}></img>
                                        <h5>Nombre: {item.prodName}</h5>
                                        <h6>Precio: {item.prodValue}</h6>
                                        <h6>Cantidad: {item.stock}</h6>
                                        <p><Button onClick={()=> addprodcarrito(item)} variant="success">➕</Button></p>
                                    </div>
                                )
                            }
                            )
                        }
            </div>
        </div>
    )
}

export default ListProductsUser