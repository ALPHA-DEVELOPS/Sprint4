import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Inicio from './inicio'
import AdminIndex from './admin/adminIndex';
import UserIndex from './usuario/userIndex';
import { useState } from 'react';
import '../styles/indexStyle.css'
function NavBar() {
    const [estadoInicio, setEstadoInicio] = useState(<Inicio/>)

    function showInicio(){
        setEstadoInicio(<Inicio/>)
    }
    function showAdmin(){
        setEstadoInicio(<AdminIndex/>)
    }
    function showUser(){
        setEstadoInicio(<UserIndex/>)
    }
  return (
    <>
      <Navbar variant='dark'>
        <Container>
          <Nav className="me-auto">
          <Nav.Link onClick={showInicio}>Home</Nav.Link>
            <Nav.Link onClick={showAdmin}>Administrador</Nav.Link>
            <Nav.Link onClick={showUser}>Usuario</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        {estadoInicio}
    </>

  );
}

export default NavBar;