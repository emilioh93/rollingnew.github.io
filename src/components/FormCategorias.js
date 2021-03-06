import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const FormCategorias = (props) => {
  const [tituloCategoria, setTituloCategoria] = useState("");
  const [error, setError] = useState(false);

  let history = useHistory();
  const URL = process.env.REACT_APP_API_URL_Categorias;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tituloCategoria.trim() !== "") {
      setError(false);

      const categoria = {
        tituloCategoria,
      };

      try {
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoria),
        };

        const response = await fetch(URL, cabecera);
        if (response.status === 201) {
          Swal.fire(
            "Categoría agregada",
            "La categoría se cargó correctamente",
            "success"
          );
          e.target.reset();
          history.push("/login/admin/categorias");
        }
      } catch (error) {
        Swal.fire(
          "Ocurrió un error",
          "Inténtelo nuevamente en unos minutos",
          "error"
        );
      }
    } else {
      setError(true);
    }
  };

  return (
    <Container className="my-5">
      <Button
        onClick={() => history.goBack()}
        className="bg-light text-primary"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver
      </Button>
      <Form onSubmit={handleSubmit}>
        <h3 className="my-5 text-center">Agregar Categoría</h3>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTituloCategoria(e.target.value)}
          ></Form.Control>
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
