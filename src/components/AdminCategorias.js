import React, { useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemCategoria from "./ItemCategoria";

const AdminCategorias = ({ consultarAPICat, categorias }) => {

  let history = useHistory();

  useEffect(() => {
    consultarAPICat();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="my-5">
      <Button
        onClick={() => history.goBack()}
        className="bg-light text-primary"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver
      </Button>
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
