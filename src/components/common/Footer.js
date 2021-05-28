import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons";
import Error404 from "../Error404";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="mb-4">Contáctanos</h4>
            <ul className="list-unstyled">
              <li><Link to={Error404}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>{" "}RollingNews</li>
              <li><Link to={Error404}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>{" "}RollingNews</li>
              <li><Link to={Error404}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Link>{" "}RollingNews</li>
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
              <Link><li>https://www.infobae.com</li></Link>
              <Link><li>https://www.lagaceta.com.ar</li></Link>
              <Link><li>https://www.bbc.com/mundo</li></Link>
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
