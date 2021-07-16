import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons";
import Error404 from "../Error404";
import {Link} from "react-router-dom";
import googleplay from './badge-apple-store.svg';
import applestore from './google-play-badge-bb.svg'

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h4 className="mb-4">Contáctanos</h4>
            <ul className="list-unstyled">
              <li><Link to="*"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>{" "}RollingNews</li>
              <li><Link to="*"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>{" "}RollingNews</li>
              <li><Link to="*"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Link>{" "}RollingNews</li>
            </ul>
          </div>
          <div className="col text-center">
            <h4 className="mb-4">Instalá nuestra app</h4>
            <ul className="list-unstyled">
              <li><a href="" target="_blank"><img className="w-50 mb-3" src={googleplay} alt="Google Play"/></a></li>
              <li><a href="https://www.apple.com/la/app-store/" target="_blank"><img className="w-50" src={applestore} alt="Apple Store"/></a></li>
            </ul>
          </div>
          <div className="col text-center">
            <h4 className="mb-4">Otras páginas de interés</h4>
            <ul className="list-unstyled">
              <a href="https://www.infobae.com" target="_blank"><li>https://www.infobae.com</li></a>
              <a href="https://www.lagaceta.com.a" target="_blank"><li>https://www.lagaceta.com.ar</li></a>
              <a href="https://www.bbc.com/mundo" target="_blank"><li>https://www.bbc.com/mundo</li></a>
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
