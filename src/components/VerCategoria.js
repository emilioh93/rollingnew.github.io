import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemNoticia from "./ItemNoticia";

const VerCategoria = ({ noticias }) => {
  const { id } = useParams();
  const arrayFiltrado =
    noticias && noticias.filter((noticia) => noticia.categoria === id);

  return (
    <Container>
      <h2 className="text-center my-5">Noticias en categoría: {id}</h2>
      <ListGroup>
        {arrayFiltrado &&
          arrayFiltrado.map((noticia, i) => (
            <ItemNoticia noticia={noticia} key={i}></ItemNoticia>
          ))}
      </ListGroup>
    </Container>
  );
};

export default VerCategoria;
