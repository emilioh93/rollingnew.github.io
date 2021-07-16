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
              <li><Link><img className="w-50 mb-3" src={googleplay} alt="Google Play"/></Link></li>
              <li><Link><img className="w-50" src={applestore} alt="Apple Store"/></Link></li>
            </ul>
          </div>
          <div className="col text-center">
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
