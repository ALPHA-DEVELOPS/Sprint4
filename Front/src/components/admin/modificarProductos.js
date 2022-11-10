import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function ChangeProd() {
    function  ConsultarDatos(){
        let datos = {
            id: document.getElementById("id").value,
        } 
            fetch('http://localhost:5000/consultar', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify(datos)
            })
            .then(res => res.json())
            .then(data => showData(data))
            .catch(err => {
            let data = {prodName:"",stock:"",prodValue:""}
            showData(data)
            alert("Usuario no existe")
        })
        }
        function showData(data){
            document.getElementById('nombre').value = data.prodName
            document.getElementById('cantidad').value = data.stock
            document.getElementById('precio').value = data.prodValue
            document.getElementById('nombre').disabled = false
            document.getElementById('cantidad').disabled = false
            document.getElementById('precio').disabled = false
            document.getElementById('changeButton').disabled = false
            
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
                    <Form.Control id="cantidad" type="number" placeholder="Cantidad" disabled/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control id="precio" type="text" placeholder="Precio" disabled/>
                </Form.Group>
                <Button type="button" onClick={ConsultarDatos} variant="primary" >
                    Consultar
                </Button>
                <Button id="changeButton"variant="primary"disabled>
                    Modificar
                </Button>
            </Form>
        </div>
    )
}




export default ChangeProd