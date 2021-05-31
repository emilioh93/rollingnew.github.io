import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemCategoria from "./ItemCategoria";


const AdminCategorias = (props) => {
  return (
    <Container className="my-5">
      <Link exact={true} to="/login/admin" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <h2 className="text-center">Administrador de Categorías</h2>
      <div className="d-flex justify-content-end">
      <Link
          className="my-4 btn btn-primary"
          exact={true}
          to="/login/admin/categorias/nueva/"
        >
          Agregar Categoría
        </Link>
      </div>
      <ListGroup>
        {props.categorias.map((categoria) => (
          <ItemCategoria
            categoria={categoria}
            key={categoria._id}
            consultarAPICat={props.consultarAPICat}
          ></ItemCategoria>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AdminCategorias;
