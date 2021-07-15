import React, { useState, useHistory } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useParams, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const FormCategorias = (props) => {
  const [tituloCategoria, setTituloCategoria] = useState("");
  const [error, setError] = useState(false);
  // Traer variable de entorno
  const URL = process.env.REACT_APP_API_URL_Categorias;
  console.log(URL);

  // const leerCategoria = (e) => {
  //   setCategoria(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones
    if (tituloCategoria.trim() !== "") {
      // Si está todo ok, envío los datos de la categoría a la API
      setError(false);
      // Crear objeto
      const categoria = {
        tituloCategoria,
      };
      console.log(categoria);
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
          // props.consultarAPICat();
          // Redireccionar al componente AdminCategorías
          // props.history.push("/login/admin/categorias");
          window.location.href = "/login/admin/categorias";
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
          <Form.Control type="text"
          onChange={(e) => setTituloCategoria(e.target.value)}></Form.Control>
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

export default withRouter(FormCategorias);

