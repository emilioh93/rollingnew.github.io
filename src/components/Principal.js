import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import noticiaIsrael from "../img/israel1.jpeg";
import noticiaDos from "../img/covid1.webp";
import noticiaTres from "../img/ciberdelito.jpeg";

const Principal = (props) => {
  
  // props.consultarAPI();
  // prop.
  // useEffect(() => {
  //   props.consultarAPICat();
  // useEffect(() => {
  //   props.consultarAPI();
  // }, []);

  return (
    <Container className="my-5">
      <section className="text-center"></section>
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
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={noticiaIsrael} alt="Israel1" />
          <Carousel.Caption>
            <h3>
              ¿Qué está pasando entre Palestina e Israel? Las claves para
              entender el conflicto
            </h3>
            <p className="ocultar">
              El actual enfrentamiento entre el Ejército israelí y Hamás en la
              franja de Gaza alcanza un nivel de violencia no visto desde 2014
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={noticiaDos} alt="Covid1" />

          <Carousel.Caption>
            <h3>
              Descubrieron el “talón de Aquiles” del coronavirus para evitar que
              se multiplique en el cuerpo
            </h3>
            <p className="ocultar">
              Investigadores suizos e irlandeses hallaron un mecanismo por el
              que se podría inhibir la replicación del SARS-CoV-2 en el
              organismo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={noticiaTres} alt="Third slide" />

          <Carousel.Caption>
            <h3>
              Estafas en el homebanking: dónde y cómo hacer la denuncia si
              fuiste engañado
            </h3>
            <p className="ocultar">
              Los ciberdelitos tuvieron un importante incremento en el último
              año. Qué deben hacer las víctimas para hacer valer sus derechos
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Principal;
