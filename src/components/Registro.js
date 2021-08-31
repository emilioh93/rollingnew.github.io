import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";

const Registro = () => {
  const [usuarioCreado, setUsuarioCreado] = useState("");
  const [passCreado, setPassCreado] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [listaCuentas, setListaCuentas] = useState("");

  class Cuentas {
    constructor(usuario, password) {
      this.usuario = usuario;
      this.password = password;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde formulario de cuentas");
  
  };

  const crearCuenta = ()=>{
    const cuentaCreada = new Cuentas (usuarioCreado,passCreado)
    console.log(cuentaCreada)
    setCuenta(cuentaCreada);
    console.log(cuenta)
  }

  return (
    <Container className="d-flex justify-content-center">
      <Form className="my-3" onSubmit={handleSubmit}  id="registro">
        <h1>Registrarse</h1>
        <Form.Group className="my-3">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsuarioCreado(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassCreado(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="">
          <Button className="" type="submit" onClick={crearCuenta}>
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Registro;
