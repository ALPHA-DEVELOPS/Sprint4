import React, { useState } from "react";
import '../../styles/adminStyle.css'
import ListGroup from 'react-bootstrap/ListGroup';
import AddProduct from './agregarProducto'
import ListProducts from "./ListarProductos";
import ChangeProd from "./modificarProductos";

function AdminIndex() {

    const [estadoAdmin, setEstadoAdmin] = useState(<AddProduct />)
    return (
        <>
            <div>
                <div className="indexAdmin">
                    <span>Administrador</span>
                    <ListGroup variant="flush">
                        <ListGroup.Item onClick={() => setEstadoAdmin(<AddProduct/>)}>Agregar producto</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEstadoAdmin(<ListProducts/>)}>Listar Producto</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEstadoAdmin(<ChangeProd/>)}>Modificar producto</ListGroup.Item>
                        <ListGroup.Item>Listar ventas</ListGroup.Item>
                    </ListGroup>
                    {estadoAdmin}
                </div>
            </div>
        </>
    )
}

export default AdminIndex