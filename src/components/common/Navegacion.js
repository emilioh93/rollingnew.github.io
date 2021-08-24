import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../common/LogoRollingNews.png";

const Navegacion = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand id="logoLg" href="#home">
          <NavLink exact={true} to="/">
          <img src={logo} alt="RollingNews" className="logoLgImg" />
          </NavLink>
        </Navbar.Brand>
        {/* Logo para mobile */}
        <img id="logoSm" src={logo} alt="logo Rolling News" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact={true} to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink exact={true} to="/Actualidad" className="nav-link">
              Actualidad
            </NavLink>
            <NavLink exact={true} to="/Espectáculos" className="nav-link">
              Espectáculos
            </NavLink>
            <NavLink exact={true} to="/Tecnologia" className="nav-link">
              Tecnología
            </NavLink>
            <NavLink exact={true} to="/Deportes" className="nav-link">
              Deportes
            </NavLink>
            {/* Otras categorías */}
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  exact={true}
                  to="/Economía"
                  className="nav-link text-dark"
                >
                  Economía
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  exact={true}
                  to="/Política"
                  className="nav-link text-dark"
                >
                  Política
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  exact={true}
                  to="/Salud"
                  className="nav-link text-dark"
                >
                  Salud
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  exact={true}
                  to="/Fotografía"
                  className="nav-link text-dark"
                >
                  Fotografía
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink exact={true} to="/login" id="login" className="nav-link">
              <strong className="margenIzq">Login</strong>
            </NavLink>
            <NavLink exact={true} to="/suscripcion" id="suscripcion" className="nav-link">
              <strong>Suscripción</strong>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
