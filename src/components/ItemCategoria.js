import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ItemCategoria = (props) => {
  const eliminarCategoria = (codigo) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta categoría?",
      text: "No puedes recuperar una categoría que fue eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLCat =
            process.env.REACT_APP_API_URL_Categorias + "/" + codigo;
          const respuesta = await fetch(URLCat, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "Categoría eliminada!",
              "La categoría seleccionada fue correctamente eliminada.",
              "success"
            );
            // props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Ocurrió un error!",
            "Inténtelo nuevamente más tarde.",
            "warning"
          );
        }
        Swal.fire(
          "¡Categoría eliminada!",
          "La categoría seleccionada fue correctamente eliminada.",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>{props.categoria.tituloCategoria} </p>
        <div>
          <Link
            className="mr-2 btn btn-info text-light"
            to={`/login/admin/categorias/ver/${props.categoria.tituloCategoria}`}
          >
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </Link>
          <Link
            className="mr-2 btn btn-warning text-light"
            to={`/login/admin/categorias/editar/${props.categoria._id}`}
          >
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
          </Link>
          <Button
            variant="danger"
            onClick={() => eliminarCategoria(props.categoria._id)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemCategoria;
