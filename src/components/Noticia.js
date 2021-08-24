import React from "react";
import { Container, ListGroup } from "react-bootstrap";
//import ItemNoticia from "./ItemProducto";
import { Card } from "react-bootstrap";
/*const Noticia = (props) => {
    return (
        <Container>
      <h1 className="text-center my-5">Noticias</h1>
      <ListGroup className="my-5">
          {props.noticia.map((noticia)=><ItemNoticia noticia = {noticia} key = {noticia.id} consultarAPI={props.consultarAPI}></ItemNoticia>)}
      </ListGroup>
    </Container>
    );
};*/
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
