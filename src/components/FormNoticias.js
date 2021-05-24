import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const FormNoticias = () => {
  return (
    <Container className="my-5">
      <Link exact={true} to="login/admin/noticias/nueva" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <Form>
        <h3 className="my-5 text-center">Agregar Noticia</h3>
        <p>
          Complete todos los campos del siguiente formulario para agregar una
          noticia.
        </p>
        <br />
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select">
            <option>Actualidad</option>
            <option>Espectáculos</option>
            <option>Tecnología</option>
            <option>Deportes</option>
            <option>Economía</option>
            <option>Salud</option>
            <option>Política</option>
            <option>Fotografía</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Contenido</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
        <Form.Group className="mt-4 row">
          <div className="col-md-6 col-sm-12 text-center">
            <Form.Label>Imagen grande</Form.Label>
            <Form.File />
            <Form.Text className="text-muted">
              Cargue la imagen que quieras que aparezca en la página de la
              noticia
            </Form.Text>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <Form.Label className="mtSM">Imagen miniatura</Form.Label>
            <Form.File />
            <Form.Text className="text-muted">
              Cargue la imagen que quieras que aparezca en la miniatura de la
              noticia
            </Form.Text>
          </div>
        </Form.Group>
        <Button type="submit" className="mt-5 w-100" size="lg" block>
          Agregar noticia
        </Button>
      </Form>
    </Container>
  );
};

export default FormNoticias;
