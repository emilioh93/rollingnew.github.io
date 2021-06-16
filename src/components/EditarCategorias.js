import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useParams, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { campoRequerido, rangoValor } from "./common/helpers";

const EditarCategorias = (props) => {
  const [categoria, setCategoria] = useState({});
  const { id } = useParams();
  const tituloCategoriaRef = useRef("");
  const [error, setError] = useState(false);
  // Traer variable de entorno
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);

  useEffect(() => {
    consultarCategoria();
  }, []);

  const consultarCategoria = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const categoriaEncontrada = await respuesta.json();
        setCategoria(categoriaEncontrada);
      }
    } catch (error) {
      console.log(error);
      // Mostrar cartel al usuario
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Validar datos
    if (
      campoRequerido(tituloCategoriaRef.current.value)
    ) {
      // Ocultar cartel de error
      setError(false);
      // Si está bien, envío request a API
      try {
        const categoriaModificada = {
          tituloCategoria: tituloCategoriaRef.current.value,
        };
        // Realizar request
        const respuesta = await fetch(`${URL}/${categoria._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoriaModificada),
        });
        if (respuesta.status === 200) {
          Swal.fire(
            "Categoría editada",
            "La categoría fue modificada correctamente",
            "success"
          );
          // Actualizar datos
          props.consultarAPI();
          // Quiero redireccionar a otra ruta del sistema de rutas
          props.history.push("/login/admin/categorias");
        }
        console.log(respuesta);
      } catch (error) {
        console.log(error);
        // Mostrar cartel al usuario de que algo falló
      }
    } else {
      // Si está mal, pido al usuario que revise los datos
      setError(true);
    }
  };

  return (
    <Container className="my-5">
      <Link exact={true} to="/login/admin/categorias/" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <Form onSubmit={handleSubmit}>
        <h3 className="my-5 text-center">Editar Categoría</h3>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control
          type="text"
          defaultValue={categoria.tituloCategoria}
          ref={tituloCategoriaRef}  
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          className="mt-5 w-100 btn-success"
          size="lg"
          block
        >
          Editar categoría
        </Button>
        {error === true ? (
          <Alert variant="danger" className="my-5">
            Faltan cargar datos obligatorios
          </Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default withRouter(EditarCategorias);
