import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import noticiaVacuna from "../img/vacuna2.png";
import noticiaBitcoin from "../img/bitcoin2.png";
import noticiaDolar from "../img/dolar2.png";

const Principal = (props) => {
  return (
    <Container className="my-5">
      <section className="text-center"></section>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={noticiaVacuna}
            alt="Vacuna Covid"
          />
          <Carousel.Caption>
            <h3>
              Un “súper-anticuerpo” podría ser la llave hacia el desarrollo de
              una vacuna contra diferentes coronavirus
            </h3>
            <p className="ocultar">
              Lo identificaron científicos de los Estados Unidos, y también
              podría contribuir a nuevos fármacos en pacientes graves. Expertos
              de Argentina creen que es un hallazgo “prometedor”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={noticiaBitcoin} alt="Bitcoin" />

          <Carousel.Caption>
            <h3>
              Bitcoin se acerca a un “cruce bajista”: la criptomoneda está cerca
              de dar una señal que asusta a los inversores
            </h3>
            <p className="ocultar">
              Los inversores miran las medias móviles del precio de la
              criptodivisa con preocupación. Bitcoin cae más de 2% en el día y
              arrastra a otros tokens similares
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={noticiaDolar} alt="Dolar" />

          <Carousel.Caption>
            <h3>
              Inflación y dólar: cuáles son las proyecciones de consultoras y
              bancos hasta fin de año
            </h3>
            <p className="ocultar">
              Los participantes de LatinFocus estiman una suba de precios
              superior al 48% para 2021 y un dólar mayorista a $112. Creen que
              el PBI rebotará pero no podrá compensar el desplome de 2020
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Principal;
