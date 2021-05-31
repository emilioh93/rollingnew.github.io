import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ItemCategoria = (props) => {

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.categoria.tituloCategoria}{" "}
        </p>
        <div>
          <Link
            className="mr-2 btn btn-info text-light"
            to={`/login/admin/categorias/editar/${props.categoria._id}`}
          >
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </Link>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemCategoria;
