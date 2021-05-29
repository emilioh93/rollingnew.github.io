import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ItemNoticia from "./ItemNoticia";

const AdminNoticias = (props) => {
  return (
    <Container className="my-5">
      <Link exact={true} to="/login/admin" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <h2 className="text-center">Administrador de Noticias</h2>
      <div className="d-flex justify-content-end">
        <Link className="my-4 btn btn-primary" exact={true} to="noticias/nueva">
          Agregar Noticia
        </Link>
      </div>
      <ListGroup>
        {props.noticias.map((noticia) => (
          <ItemNoticia
            noticia={noticia}
            key={noticia.id}
            consultarAPI={props.consultarAPI}
          ></ItemNoticia>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AdminNoticias;
