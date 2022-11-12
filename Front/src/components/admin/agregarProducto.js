import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/adminStyle.css'


function AddProduct() {

    function AgregarDatos() {
        let datosadd = {
            nombre: document.getElementById("nombre").value,
            cantidad: document.getElementById("cantidad").value,
            precio: document.getElementById("precio").value
        }
        fetch('http://localhost:5000/agregar', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosadd)
        })
            .then((res) => res.json())
            .then((dato) => console.log("Datos modificados", dato))
            .catch((err) => console.log("Error: ", err))

            document.getElementById("nombre").value = ''
            document.getElementById("cantidad").value = ''
            document.getElementById("precio").value = ''
    }

    return (
        <div className="addProduct">
            <h1>Agregar Producto</h1>

            <Form className="formulario">
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control id="nombre" type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control id="cantidad" type="number" placeholder="Cantidad" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control id="precio" type="text" placeholder="Precio" />
                </Form.Group>
                <Button onClick={AgregarDatos} className="botonConsultar" type="button" id="changeButton" variant="primary" >
                    Agregar Producto
                </Button>
            </Form>
        </div>
    )
}




export default AddProduct