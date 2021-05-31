import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ItemNoticia = (props) => {
  const eliminarNoticia = (codigo) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta noticia?",
      text: "No puedes recuperar una noticia que fue eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Agregar solicitud deleted
        try {
          const URL = process.env.REACT_APP_API_URL + "/" + codigo;
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "¡Noticia eliminada!",
              "La noticia seleccionada fue correctamente eliminada.",
              "success"
            );
            //  Volver a consultar la API
            props.consultarAPI();
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
          "¡Noticia eliminada!",
          "La noticia seleccionada fue correctamente eliminada.",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          <span className="font-weight-bold">
            Categoría: {props.noticia.categoria} -
          </span>
          {props.noticia.titulo}{" "}
        </p>
        <div>
          <Link
            className="mr-2 btn btn-warning text-light"
            to={`/login/admin/noticias/editar/${props.noticia._id}`}
          >
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
          </Link>
          <Button
            variant="danger"
            onClick={() => eliminarNoticia(props.noticia._id)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemNoticia;
