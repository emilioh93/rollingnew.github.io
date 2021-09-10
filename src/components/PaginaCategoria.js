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
      <div className="row d-flex justify-content-center">
        {arrayFiltrado &&
          arrayFiltrado.map((noticia, i) => {
            return (
              <Card key={i} className="col-sm-12 col-md-3 m-2 sombra">
                <Card.Img
                  variant="top"
                  className="w-100 pt-2"
                  src={noticia.imgChica}
                />
                <Card.Body>
                  <Card.Title>{noticia.titulo}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Link
                    to={`/noticias/${noticia._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Leer más
                  </Link>
                </Card.Footer>
              </Card>
            );
          })}
      </div>
    </Container>
  );
};

export default PaginaCategoria;
