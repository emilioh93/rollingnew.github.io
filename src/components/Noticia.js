import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Noticia = (props) => {
  return (
    <Card className="mx-4 sombra">
      <Card.Img variant="top" src={props.datos.imgChica} />
      <Card.Body>
        <Card.Title>{props.datos.titulo}</Card.Title>
        <Card.Text>{props.datos.resumen}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};
export default Noticia;
