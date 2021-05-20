import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../common/LogoRollingNews.png";

const Navegacion = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand id="logoLg" href="#home">
          <img src={logo} alt="RollingNews" className="logoLgImg" />
        </Navbar.Brand>
        {/* Logo para mobile */}
        <img id="logoSm" src={logo} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact={true} to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink exact={true} to="" className="nav-link">
              Actualidad
            </NavLink>
            <NavLink exact={true} to="" className="nav-link">
              Espectáculos
            </NavLink>
            <NavLink exact={true} to="" className="nav-link">
              Tecnología
            </NavLink>
            <NavLink exact={true} to="" className="nav-link">
              Deportes
            </NavLink>
            {/* Otras categorías */}
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Salud</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fotografía</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
              <NavLink exact={true} to="" className="nav-link ">
                <strong className="margenIzq">Login</strong>
              </NavLink>
              <NavLink exact={true} to="" className="nav-link">
                <strong>Suscripción</strong>
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
