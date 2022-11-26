
import React, { useState } from "react";
import '../../styles/userStyle.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Carrito from "./carrito";
import ListProductsUser from "./listProdUser";
import Button from 'react-bootstrap/Button';

let cerrarSesion = () => {
    window.location.href="http://localhost:3000/"
}
function UserIndex() {
    const [estadoUser, setEstadoUser] = useState(<ListProductsUser />)

        return (
            <div>
                <div className="indexAdmin">
                    <span className="TitleRol">Usuario</span>
                    <ListGroup variant="flush">
                        <ListGroup.Item onClick={() => setEstadoUser(<ListProductsUser />)} >Listar producto</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEstadoUser(<Carrito />)}>Carrito</ListGroup.Item>
                    <Button variant="danger" onClick={cerrarSesion}>Cerrar Sesion</Button>
                    </ListGroup>
                    {estadoUser}
                </div>

            </div>

        )
    }
export default UserIndex