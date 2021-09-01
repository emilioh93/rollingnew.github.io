import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const Login = (props) => {
  const [usuario, setUsuario] = useState();
  const [password, setPassword] = useState(0);
  const { setUser } = useContext(UserContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "admin" && password === 1234) {
      Swal.fire("Bienvenido Admin", "", "success");
      history.push("/login/admin");
      setUser(true);
      localStorage.setItem("user", usuario);
    } else {
      alert("ingreso invalido");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form className="my-3" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
        <Form.Group className="my-3">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(parseFloat(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="">
          <Button className="" type="submit">
            Ingresar
          </Button>
          <Link to="/registro" className="ms-3">
            Registrate gratis
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
