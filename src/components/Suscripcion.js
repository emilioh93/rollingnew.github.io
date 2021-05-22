import React from "react";
import { Form } from "react-bootstrap";
import "./Suscripcion.css"

const Suscripcion = () => {
  return (
    <div className="d-flex justify-content-center" id='fondo'>
        <Form className="my-5 w-50">
          <h1 className="text-center my-3">Formulario de Suscripcion</h1>
          <Form.Group className="my-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Juan"></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Perez"></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="San Martin 456"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Localidad</Form.Label>
            <Form.Control type="text" placeholder="Yerba Buena"></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control type="number" placeholder="4107"></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="381 4564553"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="JuanPerez@....."
            ></Form.Control>
          </Form.Group>
        </Form>
    </div>
  );
};

export default Suscripcion;
