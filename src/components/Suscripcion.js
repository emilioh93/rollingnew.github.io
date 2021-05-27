import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Suscripcion.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const Suscripcion = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [codigo, setCodigo] = useState(0);
  const [telefono, setTelefono] = useState(0);
  const [email, setEmail] = useState("");
  const [terminos, setTerminos] = useState();
  const [validacion, setValidacion] = useState(false);

  //email js
  const enviarEmail = () => {
    emailjs.init("user_fbZqDWU5ahJrkgKSQZGX0");

    emailjs
      .send("service_g5f91i6", "template_cnqp0a8", {
        from_name: `${nombre} ${apellido}`,
        to_name: `Administrador`,
        message: `Nombre: ${nombre}, ${apellido}
      Direccion: ${direccion}
      Localidad: ${localidad}
      Codigo Postal ${codigo}
      Telefono: ${telefono}
      Email ${email}`,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  //validacion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidacion(true);
    console.log("desde submit");
    console.log(nombre.length);
    console.log(validacion);

    if (
      nombre.trim() !== "" &&
      apellido.trim() !== "" &&
      direccion.trim() !== "" &&
      direccion.trim() !== "" &&
      localidad.trim() !== "" &&
      localidad.trim() !== "" &&
      codigo !== "" &&
      telefono !== "" &&
      email.trim() !== ""
    ) {
      setValidacion(false);
      Swal.fire(
        "Perfecto, los datos fueron validados",
        "En breve recibira un mail con la informacion",
        "success"
      );

      enviarEmail();
    } else {
      Swal.fire({
        icon: "error",
        title: "Los datos no fueron validados",
        text: "Llenar los campos indicados",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center" id="fondo">
      <Form
        className="my-5 w-50"
        onSubmit={handleSubmit}
        validated={validacion}
        noValidate
      >
        <h1 className="text-center my-3">Formulario de Suscripcion</h1>
        <Form.Group className="my-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan"
            onChange={(e) => setNombre(e.target.value)}
            required
          ></Form.Control>
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Llenar el campo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Perez"
            onChange={(e) => setApellido(e.target.value)}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Llenar el campo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            type="text"
            placeholder="San Martin 456"
            onChange={(e) => setDireccion(e.target.value)}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Llenar el campo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Localidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Yerba Buena"
            onChange={(e) => setLocalidad(e.target.value)}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Llenar el campo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control
            type="number"
            placeholder="4107"
            onChange={(e) => setCodigo(e.target.value)}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Llenar el campo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="381 4564553"
            onChange={(e) => setTelefono(e.target.value)}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Llenar el campo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="JuanPerez@....."
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Llenar el campo
          </Form.Control.Feedback>
        </Form.Group>
        {/* Agregar terminos y condiciones */}
        <Form.Group>
          <Form.Check
            label="Acepto los terminos y condiciones"
            feedback="Debe aceptar los terminos y condiciones"
            required
          ></Form.Check>
        </Form.Group>
        <Button type="submit" className="my-3">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Suscripcion;
