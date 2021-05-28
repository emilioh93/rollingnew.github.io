import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="mb-4">Contáctanos</h4>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{" "}
                RollingNews
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> RollingNews
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>{" "}
                RollingNews
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Descarga nuestra App</h4>
            <ul className="list-unstyled">
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="col">
            <h4 className="mb-4">Otras páginas de interés</h4>
            <ul className="list-unstyled">
              <a>
                <li>https://www.infobae.com</li>
              </a>
              <a>
                <li>https://www.lagaceta.com.ar</li>
              </a>
              <a>
                <li>https://www.bbc.com/mundo</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm text-center mt-3">
            &copy; RollingNews 2021. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
