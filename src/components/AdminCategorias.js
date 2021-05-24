import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const AdminNoticias = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Administrador de Categorías</h2>
      <div className="d-flex justify-content-end">
      <Link
          className="my-4 btn btn-success"
          exact={true}
          to="categorias/nueva"
        >
          Agregar Categoría
        </Link>
      </div>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Actualidad</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Espectáculos</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Tecnología</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Deportes</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Economía</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Salud</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Política</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Fotografía</p>
          <div>
            <Button variant="info">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default AdminNoticias;
