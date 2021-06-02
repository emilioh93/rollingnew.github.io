import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import imgNoticia from '../img/imagenNoDisponible.png';
import { Link } from "react-router-dom";


const Categoria = (props) => {
  
  console.log(props.categorias)
  console.log(props.noticias)
  return (
    <Container className="my-5 borde">
      <h2 className="my-4 text-center">{props.titulo}</h2>
      <CardGroup>
        <Link exact={true} to="/noticias/detalle">
        <Card className="mx-4 sombra">
          <Card.Img variant="top" src={imgNoticia} />
          <Card.Body>
            <Card.Title>{props.noticias[0].titulo}</Card.Title>
            <Card.Text>
            
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Link>
        <Card className="mx-4 sombra">
          <Card.Img variant="top" src={props.noticias[0].imgChica} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="mx-4 sombra">
          <Card.Img variant="top" src={imgNoticia} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Categoria;
