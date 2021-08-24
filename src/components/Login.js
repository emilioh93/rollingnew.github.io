import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory, useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const Login = (props) => {
  const [usuario, setUsuario] = useState();
  const [password, setPassword] = useState(0);
  const [sesion, setSesion] = useState(false);
  const { setUser } = useContext(UserContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "admin" && password === 1234) {
      alert("ingreso valido");
      history.push("/login/admin");
      setSesion(true);
      setUser(true);
      localStorage.setItem("user", usuario);
      console.log(sesion);
    } else {
      alert("ingreso invalido");
      setSesion(false);
      console.log(sesion);
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
