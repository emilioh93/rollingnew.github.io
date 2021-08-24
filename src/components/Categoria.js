import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgNoticia from "../img/imagenNoDisponible.png";
//import { Link } from "react-router-dom";
import Noticia from "./Noticia";
const Categoria = (props) => {
  return (
    <Container className="my-5 borde">
      <h2 className="my-4 text-center">{props.titulo}</h2>
      {props.noticias.map((noticia) => {
        return (
          <Card className="mx-4 sombra">
            <Card.Img variant="top" src={noticia.imgChica} />
            <Card.Body>
              <Card.Title>{noticia.titulo}</Card.Title>
              <Card.Text>{noticia.resumen}</Card.Text>
            </Card.Body>
            <Link to={`/noticias/${noticia._id}`}>Leer más</Link>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        );
      })}
    </Container>
  );
};
export default Categoria;
