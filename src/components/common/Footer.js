import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagramSquare, faTwitterSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-dark text-center text-light py-3">
      &copy; RollingNews. Todos los derechos reservados.
      <FontAwesomeIcon icon={faInstagramSquare}>RollingNews</FontAwesomeIcon>
      <FontAwesomeIcon icon={faTwitterSquare}>RollingNews</FontAwesomeIcon>
      <FontAwesomeIcon icon={faFacebookSquare}>RollingNews</FontAwesomeIcon>
    </div>
  );
};

export default Footer;
