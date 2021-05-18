import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import portada from '../img/portadaprueba.png'

const Principal = () => {
  return (
    <Container className="my-5">
      {/* <Card className="bg-dark text-white sombra">
        <Card.Img className="w-100 fondo" />
        <Card.ImgOverlay class="infoPrincipal">
          <h1>Marcha por la inseguridad</h1>
          <Card.Text className="mt-4 lead">
            Nueve de cada 10 tucumanos, preocupados por la inseguridad. Descubre
            los temos estructurales que más inquietan a al población según
            Sociología y Mercado.
          </Card.Text>
          <Card.Text>Hace 1 hora</Card.Text>
        </Card.ImgOverlay>
      </Card> */}
      <Card className="sombra bg-dark">
        <Card.Body>
          <h2 className="text-center display-6 text-light">Nueva marcha en reclamo por la inseguridad</h2>
        </Card.Body>
        <Card.Img variant="bottom" src={portada} className="w-100"/>
      </Card>
    </Container>
  );
};

export default Principal;
