import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminNoticias = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Administrador de Noticias</h2>
      <div className="d-flex justify-content-end">
        <Link className="my-4 btn btn-primary" exact={true} to="noticias/nueva">
          Agregar Noticia
        </Link>
      </div>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>
            Los contagios se disparan 40% y ponen al borde del colapso el
            sistema
          </p>
          <div>
            <Link className="mx-2 btn btn-warning text-light">
              <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
            </Link>
            <Button variant="danger">
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Así celebró Luis Suárez tras ser campeón</p>
          <div>
            <Link className="mx-2 btn btn-warning text-light">
              <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
            </Link>
            <Button variant="danger">
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <p>Advierten por fuertes vientos y lluvias en Tucumán</p>
          <div>
            <Link className="mx-2 btn btn-warning text-light">
              <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
            </Link>
            <Button variant="danger">
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default AdminNoticias;
