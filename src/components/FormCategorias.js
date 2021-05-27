import React from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const FormCategorias = () => {
  return (
    <Container className="my-5">
      <Link exact={true} to="/login/admin/categorias/" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <Form>
        <h3 className="my-5 text-center">Agregar Categoría</h3>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Button type="submit" className="mt-5 w-100 btn-success" size="lg" block>
          Agregar categoría
        </Button>
      </Form>
    </Container>
  );
};

export default FormCategorias;
