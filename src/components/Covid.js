import React from "react";
import covid1 from "../img/covid1.png";
import covid2 from "../img/covid2.png";
import { Container } from "react-bootstrap";

const Covid = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img
            src={covid1}
            className="anchoCovid"
            alt="Imagen informativa sobre COVID 19"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            src={covid2}
            className="anchoCovid"
            alt="Imagen informativa sobre COVID 19"
          />
        </div>
      </div>
    </Container>
  );
};

export default Covid;
