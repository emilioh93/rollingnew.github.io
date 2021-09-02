import React, { useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import ItemNoticia from "./ItemNoticia";

const AdminNoticias = ({ consultarAPI, noticias }) => {
  let history = useHistory();

  useEffect(() => {
    consultarAPI();
    // eslint-disable-next-line
  }, []);
  return (
    <Container className="my-5">
      <Button onClick={() => history.goBack()} className="bg-light text-primary">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver
      </Button>
      <h2 className="text-center">Administrador de Noticias</h2>
      <div className="d-flex justify-content-end">
        <Link className="my-4 btn btn-primary" to="noticias/nueva">
          Agregar Noticia
        </Link>
      </div>
      <ListGroup>
        {noticias.map((noticia, i) => (
          <ItemNoticia
            noticia={noticia}
            key={i}
            consultarAPI={consultarAPI}
          ></ItemNoticia>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AdminNoticias;
