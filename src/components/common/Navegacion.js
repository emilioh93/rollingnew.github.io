import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Navbar.Brand href="#home">RollingNews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact={true} to='/' className='nav-link'>Inicio</NavLink>
          <NavLink exact={true} to='' className='nav-link'>Economía</NavLink>
          <NavLink exact={true} to='' className='nav-link'>Política</NavLink>
          <NavLink exact={true} to='' className='nav-link'>Salud</NavLink>
          <NavLink exact={true} to='' className='nav-link'>Tecnología</NavLink>
          <NavLink exact={true} to='' className='nav-link'>Deportes</NavLink>
          <NavLink exact={true} to='' className='nav-link'>Espectáculos</NavLink>
          <NavLink exact={true} to='' className='nav-link'>Fotografía</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
