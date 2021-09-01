import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaginaCategoria = ({ tituloCategoria, noticias }) => {
  const arrayFiltrado =
    noticias &&
    noticias.filter((noticia) => noticia.categoria === tituloCategoria);
  return (
    <Container className="my-5 borde">
      <h2 className="my-4 text-center">{tituloCategoria}</h2>
      <CardGroup>
        {arrayFiltrado &&
          arrayFiltrado.map((noticia, i) => {
            return (
              <Card key={i} className="mx-4 sombra">
                <Card.Img variant="top" src={noticia.imgChica} />
                <Card.Body>
                  <Card.Title>{noticia.titulo}</Card.Title>
                  <Card.Text>{noticia.resumen}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/noticias/${noticia._id}`}>Leer más</Link>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            );
          })}
      </CardGroup>
    </Container>
  );
};

export default PaginaCategoria;
