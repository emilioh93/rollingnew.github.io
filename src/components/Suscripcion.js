import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Suscripcion.css";

const Suscripcion = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [codigo, setCodigo] = useState(0);
  const [telefono, setTelefono] = useState(0);
  const [email, setEmail] = useState("");
  const [terminos, setTerminos] = useState();

  //validacion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde submit");
    console.log(terminos);

    if (
      nombre.trim() !== "" &&
      apellido.trim() !== "" &&
      direccion.trim() !== "" &&
      direccion.trim() !== "" &&
      localidad.trim() !== "" &&
      localidad.trim() !== "" &&
      codigo !== "" &&
      telefono !== "" &&
      email.trim() !== "" &&
      terminos === 'on'
    ) {
      alert("los datos estan correctos");
      //mandar los datos al back
    } else {
      alert("llenar los campos requeridos");
      //poner otro pensaje de error
    }
  };

  return (
    <div className="d-flex justify-content-center" id="fondo">
      <Form className="my-5 w-50" onSubmit={handleSubmit}>
        <h1 className="text-center my-3">Formulario de Suscripcion</h1>
        <Form.Group className="my-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan"
            onChange={(e) => setNombre(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Perez"
            onChange={(e) => setApellido(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            type="text"
            placeholder="San Martin 456"
            onChange={(e) => setDireccion(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Localidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Yerba Buena"
            onChange={(e) => setLocalidad(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control
            type="number"
            placeholder="4107"
            onChange={(e) => setCodigo(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="381 4564553"
            onChange={(e) => setTelefono(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="JuanPerez@....."
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* Agregar terminos y condiciones */}
        <Form.Group className="my-3">
          <Form.Check
            type="checkbox"
            label="Acepto los terminos y condiciones"
            onChange={(e) => setTerminos(e.target.value)}
          ></Form.Check>
        </Form.Group>
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default Suscripcion;
