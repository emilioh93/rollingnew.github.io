import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import principal from "./img/portadaprueba.png";

const Principal = () => {
  return (
    <Container className="my-5">
      <Card className="bg-dark text-white sombra">
        <Card.Img
          //   src={principal}
          className="w-100 fondo"
        />
        <Card.ImgOverlay class="infoPrincipal">
          <h1>Marcha por la inseguridad</h1>
          <Card.Text className="mt-4 lead">
            Nueve de cada 10 tucumanos, preocupados por la inseguridad. Descubre los temos estructurales que más inquietan a al población según Sociología y Mercado.
          </Card.Text>
          <Card.Text>Hace 1 hora</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default Principal;
