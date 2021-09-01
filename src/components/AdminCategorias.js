import React, { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemCategoria from "./ItemCategoria";

const AdminCategorias = ({ consultarAPICat, categorias }) => {
  useEffect(() => {
    consultarAPICat();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="my-5">
      <Link to="/login/admin" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <h2 className="text-center">Administrador de Categorías</h2>
      <div className="d-flex justify-content-end">
        <Link
          className="my-4 btn btn-primary"
          to="/login/admin/categorias/nueva/"
        >
          Agregar Categoría
        </Link>
      </div>
      <ListGroup>
        {categorias.map((categoria, i) => (
          <ItemCategoria
            categoria={categoria}
            key={i}
            consultarAPICat={consultarAPICat}
          ></ItemCategoria>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AdminCategorias;
