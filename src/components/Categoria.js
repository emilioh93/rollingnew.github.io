import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Categoria = (props) => {
  return (
    <Container className="my-5 borde">
      <h2 className="my-4 text-center">{props.titulo}</h2>
      <div className="row d-flex justify-content-center">
        {props.noticias.map((noticia, i) => {
          return (
            <Card key={i} className="col-sm-12 col-md-3 sombra m-2">
              <Card.Img variant="top" src={noticia.imgChica} />
              <Card.Body>
                <Card.Title className="text-center my-3">
                  {noticia.titulo}
                </Card.Title>
                <Card.Text className="text-center mt-4">
                  {noticia.resumen}
                </Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center">
                <Link
                  className="btn btn-primary my-3"
                  to={`/noticias/${noticia._id}`}
                >
                  Leer más
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};
export default Categoria;
