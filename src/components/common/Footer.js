import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fabInstagramSquare, fabTwitterSquare, fabFacebookSquare} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="bg-dark text-center text-light py-3">
      &copy; RollingNews. Todos los derechos reservados.
      <FontAwesomeIcon icon={fabInstagramSquare}>RollingNews</FontAwesomeIcon>
      <FontAwesomeIcon icon={fabTwitterSquare}>RollingNews</FontAwesomeIcon>
      <FontAwesomeIcon icon={fabFacebookSquare}>RollingNews</FontAwesomeIcon>
    </div>
  );
};

export default Footer;
