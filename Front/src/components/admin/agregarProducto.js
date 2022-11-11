import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/adminStyle.css'


function AddProduct() {

    function AgregarDatos() {
        let datosMod = {
            id: document.getElementById("id").value,
            nombre: document.getElementById("nombre").value,
            cantidad: document.getElementById("cantidad").value,
            precio: document.getElementById("precio").value,

        }
        fetch('http://localhost:5000/modificar', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosMod)
        })
            .then((res) => res.json())
            .then((dato) => console.log("Datos modificados", dato))
            .catch((err) => console.log("Error: ", err))
    }
    

    function enableInputs(valor) {
        document.getElementById('nombre').disabled = valor
        document.getElementById('cantidad').disabled = valor
        document.getElementById('precio').disabled = valor
        document.getElementById('changeButton').disabled = valor
    }
    return (
        <div className="addProduct">
            <h1>Agregar Producto</h1>

            <Form className="formulario">
                <Form.Group className="mb-3" >
                    <Form.Label>ID</Form.Label>
                    <Form.Control id="id" type="text" placeholder="ID" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control id="nombre" type="text" placeholder="Nombre"  />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control id="cantidad" type="number" placeholder="Cantidad"  />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control id="precio" type="text" placeholder="Precio"  />
                </Form.Group>
                                <Button className="botonConsultar" type="button" onClick={AgregarDatos} id="changeButton" variant="primary" >
                    Agregar Producto
                </Button>
            </Form>
        </div>
    )
}




export default AddProduct