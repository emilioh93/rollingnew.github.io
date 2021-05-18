import React from 'react';
import covid1 from "../img/covid1.png";
import covid2 from "../img/covid2.png";
import { Container } from "react-bootstrap";

const Covid = () => {
    return (
        <Container>
            <img
              src={covid1}
              className="w-50"
              alt="Imagen informativa sobre COVID 19"
            />
            <img
              src={covid2}
              className="w-50"
              alt="Imagen informativa sobre COVID 19"
            />
          </Container>
    );
};

export default Covid;