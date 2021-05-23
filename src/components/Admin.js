import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Admin = (props) => {
  return (
    <Container className="my-5">
      <div className="mb-5">
        <h1>Bienvenido al Panel de Administración</h1>
        <span>Versión: {props.version}</span>
      </div>
      <div className="d-flex justify-content-center">
        <NavLink
          className="mx-4 btn btn-primary btn-lg"
          exact={true}
          to="/admin/noticias"
        >
          Administrar Noticias
        </NavLink>
        <NavLink
          className="mx-4 btn btn-success btn-lg"
          exact={true}
          to="/admin/categorias"
        >
          Administrar Categorías
        </NavLink>
      </div>
    </Container>
  );
};

export default Admin;
