import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/indexStyle.css'
import UserIndex from "./usuario/userIndex";
import AdminIndex from "./admin/adminIndex";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
export default function Inicio() {
  let datosLogin = <div >
    <h1>Inicio</h1>
    <Form className="Inicio">
      <Form.Group className="mb-3" >
        <FloatingLabel
          controlId="emailCred"
          label="Email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Enter email" />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel
          controlId="passwordCred"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Contraseña" />
        </FloatingLabel>
      </Form.Group>

      <div className="row"> &nbsp; </div>
      <Form.Check
        inline
        label="Cliente"
        name="group1"
        type="radio"
        id={`cliente`}
      />
      <Form.Check
        inline
        label="Administrador"
        name="group1"
        type="radio"
        id={`admin`}
      />


      <br /> <br />
      <Button variant="primary" onClick={()=> autenticar()}>
        Ingresar
      </Button>
    </Form>
  </div>

  let [estado, setEstado] = useState(datosLogin)
  function autenticar() {

    let cliente = document.getElementById('cliente').checked
    let datos = {
      email: document.getElementById('emailCred').value,
      password: document.getElementById('passwordCred').value,
      userType: cliente
    }
    fetch('http://localhost:5000/autenticacion', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    })
      .then(res => res.json())
      .then(data => {
        if (data.email !== "") {
          if (cliente === true) {
            setEstado(estado = <UserIndex/>)

          }
          else {
            setEstado(estado = <AdminIndex />)
          }
        }
        else (
          alert("Usuario y/o contraseña incorrecta")
        )
      })
  }

    return (
      <div>
        {estado}
      </div>
  )

}