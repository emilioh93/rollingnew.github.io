import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Apis = ({ dolar, clima }) => {
  const dolarOficial =
    dolar && dolar.find((element) => element.casa.nombre === "Dolar Oficial");

  const dolarBlue =
    dolar && dolar.find((element) => element.casa.nombre === "Dolar Blue");

  return (
    <div className="d-flex px-5 py-3">
      <div className="me-auto">
        <strong>Dólar: </strong>
        <span>{`BNA: $${dolarOficial && dolarOficial.casa.compra}/$${
          dolarOficial && dolarOficial.casa.venta
        }`}</span>{" "}
        |{" "}
        <span>{`Blue: $${dolarBlue && dolarBlue.casa.compra}/$${
          dolarBlue && dolarBlue.casa.venta
        }`}</span>
      </div>
      <div>
        <strong>Tucumán: </strong>{" "}
        <span>
          {`${clima && clima.main.temp}`}°{" "}
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
};

export default Apis;
