import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/adminStyle.css'
function ChangeProd() {

    function ModificarDatos() {
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
    function ConsultarDatos() {
        let datos = {
            id: document.getElementById("id").value,
        }
        fetch('http://localhost:5000/consultar', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        })
            .then(res => res.json())
            .then(data => {
                if (data.prodName !== undefined) {
                    showData(data)
                    enableInputs(false)
                }
                else {
                    let data = { prodName: "", stock: "", prodValue: "" }
                    showData(data)
                    enableInputs(true)
                    setTimeout(() => {
                        alert("El producto no existe")
                    }, "300");
                }
            })
            .catch(err => {
                let data = { prodName: "", stock: "", prodValue: "" }
                showData(data)
                alert("Producto no existe")
            })
    }
    function showData(data) {
        document.getElementById('nombre').value = data.prodName
        document.getElementById('cantidad').value = data.stock
        document.getElementById('precio').value = data.prodValue


    }
    function enableInputs(valor) {
        document.getElementById('nombre').disabled = valor
        document.getElementById('cantidad').disabled = valor
        document.getElementById('precio').disabled = valor
        document.getElementById('changeButton').disabled = valor
    }
    return (
        <div className="addProduct">
            <h1>Modificar Productos</h1>

            <Form className="formulario">
                <Form.Group className="mb-3" >
                    <Form.Label>ID</Form.Label>
                    <Form.Control id="id" type="text" placeholder="ID" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control id="nombre" type="text" placeholder="Nombre" disabled />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control id="cantidad" type="number" placeholder="Cantidad" disabled />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control id="precio" type="text" placeholder="Precio" disabled />
                </Form.Group>
                <Button className="botonConsultar" type="button" onClick={ConsultarDatos } variant="primary">
                    Consultar
                </Button>
                <Button className="botonConsultar" type="button" onClick={ModificarDatos} id="changeButton" variant="primary" >
                    Modificar
                </Button>
            </Form>
        </div>
    )
}




export default ChangeProd