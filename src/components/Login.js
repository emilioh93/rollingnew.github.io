import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";

const Login = (props) => {
  const [usuario, setUsuario] = useState();
  const [password, setPassword] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(usuario);
    
    console.log("desde submit");
    
    
    if (usuario === "admin" && password === 1234) {
      alert("ingreso valido");
      props.history.push("/login/admin");
    } else {
      alert("ingreso invalido");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form className="my-3" onSubmit={handleSubmit}>
        <h1>Iniciar Sesion</h1>
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
            type="text"
            onChange={(e) => setPassword(parseFloat(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Button className="my-3" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
