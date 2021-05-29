import React from "react";
import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const FormCategorias = (props) => {
  const [titulo, setTitulo] = useState("");
  const [error, setError] = useState(false);
  // Traer variable de entorno
  const URL = process.env.REACT_APP_API_URL;
  console.log(
    "🚀 ~ file: FormCategorias.js ~ line 12 ~ FormCategorias ~ URL",
    URL
  );

  // const leerCategoria = (e) => {
  //   setCategoria(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones
    if (titulo.trim() !== "") {
      // Si está todo ok, envío los datos del producto a la API
      setError(false);

      // Crear objeto
      // const producto = {
      //     nombreProducto: nombreProducto,
      //     precioProducto: precioProducto,
      //     categoria: categoria
      // }
      const categoria = {
        titulo,
      };
      // Envío request POST
      try {
        // Estructura de datos a enviar
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoria),
        };

        const response = await fetch(URL, cabecera);
        console.log(response);
        if (response.status === 201) {
          Swal.fire(
            "Categoría agregada",
            "La categoría se cargó correctamente",
            "success"
          );
          // Reseteo form
          e.target.reset();
          // Actualizar datos
          props.consultarAPI();
          // Redireccionar al componente AdminNoticias
        }
      } catch (error) {
        Swal.fire(
          "Ocurrió un error",
          "Inténtelo nuevamente en unos minutos",
          "error"
        );
      }

      // Espero respuesta
    } else {
      // Si no está todo ok, valido el error
      setError(true);
    }
  };

  return (
    <Container className="my-5">
      <Link exact={true} to="/login/admin/categorias/" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <Form onSubmit={handleSubmit}>
        <h3 className="my-5 text-center">Agregar Categoría</h3>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          className="mt-5 w-100 btn-success"
          size="lg"
          block
        >
          Agregar categoría
        </Button>
        {error === true ? (
          <Alert variant="danger" className="my-5">
            Faltan cargar datos obligatorios
          </Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default FormCategorias;
