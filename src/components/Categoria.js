import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Categoria = (props) => {
  return (
    <div className="my-5 borde">
      <h2 className="my-4 text-center">{props.titulo}</h2>
      <div className="row d-flex justify-content-center">
        {props.noticias.map((noticia, i) => {
          return (
            <Card key={i} className="col-sm-12 col-md-3 sombra m-2">
              <Card.Img
                variant="top"
                className="w-100 pt-2"
                src={noticia.imgChica}
              />
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
              </Card.Body>
              <div className="d-flex justify-content-center pb-2">
                <Link
                  className="btn btn-primary"
                  to={`/noticias/${noticia._id}`}
                >
                  Leer más
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Categoria;
