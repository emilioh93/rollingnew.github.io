import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Categoria = (props) => {
  return (
    <Container className="my-5 borde">
      <h2 className="my-4 text-center">{props.titulo}</h2>
      {props.noticias.map((noticia) => {
        return (
          <Card className="mx-4 sombra">
            <Card.Img variant="top" src={noticia.imgChica} />
            <Card.Body>
              <Card.Title className='text-center my-3'>{noticia.titulo}</Card.Title>
              <Card.Text className='text-center mt-4'>{noticia.resumen}</Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-center'>
            <Link className='btn btn-primary my-3' to={`/noticias/${noticia._id}`}>Leer más</Link>
            </div>
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
