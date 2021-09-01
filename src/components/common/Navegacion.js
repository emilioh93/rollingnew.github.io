import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import logo from "../common/LogoRollingNews.png";
import Swal from "sweetalert2";

const Navegacion = () => {
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Está seguro que desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cerraste sesión", "", "success");
        setUser(false);
        localStorage.removeItem("user");
        history.push("/");
      }
    });
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand id="logoLg" href="#home">
          <NavLink to="/">
            <img src={logo} alt="RollingNews" className="logoLgImg" />
          </NavLink>
        </Navbar.Brand>
        {/* Logo para mobile */}
        <img id="logoSm" src={logo} alt="logo Rolling News" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/Actualidad" className="nav-link">
              Actualidad
            </NavLink>
            <NavLink to="/Espectáculos" className="nav-link">
              Espectáculos
            </NavLink>
            <NavLink to="/Tecnología" className="nav-link">
              Tecnología
            </NavLink>
            <NavLink to="/Deportes" className="nav-link">
              Deportes
            </NavLink>
            {/* Otras categorías */}
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/Economía" className="nav-link text-dark">
                  Economía
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/Política" className="nav-link text-dark">
                  Política
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/Salud" className="nav-link text-dark">
                  Salud
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/Fotografía" className="nav-link text-dark">
                  Fotografía
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            {user ? (
              <>
                <NavLink to="/login/admin" id="login" className="nav-link">
                  <strong className="margenIzq">Admin</strong>
                </NavLink>
                <Button id="logout" className="nav-link" onClick={handleLogout}>
                  <strong className="margenIzq">Logout</strong>
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/login" id="login" className="nav-link">
                  <strong className="margenIzq">Login</strong>
                </NavLink>
                <NavLink
                  to="/suscripcion"
                  id="suscripcion"
                  className="nav-link"
                >
                  <strong>Suscripción</strong>
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
