import { Button, ListGroup } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const ItemNoticia = (props) => {
  const eliminarNoticia = (codigo) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta noticia?",
      text: "No puedes recuperar una noticia eliminada",
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
          if(respuesta.status === 200){
            Swal.fire(
              "¡Noticia eliminada!",
              "La noticia fue eliminada correctamente.",
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
          "La noticia fue eliminada correctamente.",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.noticia.titulo}{" "}
          <span className="font-weight-bold">
            ${props.noticia.categoria}
          </span>
        </p>
        <div>
          <Link className="mr-2 btn btn-warning text-light" to={`/noticias/editar/${props.noticia.id}`}>
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
          </Link>
          <Button
            variant="danger"
            onClick={() => eliminarNoticia(props.noticia.id)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemNoticia;
