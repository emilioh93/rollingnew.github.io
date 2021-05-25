import React from 'react';
import { Container, ListGroup } from "react-bootstrap";
import ItemNoticia from "./ItemProducto";

const Noticia = (props) => {
    return (
        <Container>
      <h1 className="text-center my-5">Noticias</h1>
      <ListGroup className="my-5">
          {props.noticia.map((noticia)=><ItemNoticia noticia = {noticia} key = {noticia.id} consultarAPI={props.consultarAPI}></ItemNoticia>)}
      </ListGroup>
    </Container>
    );
};

export default Noticia;