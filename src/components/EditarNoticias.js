import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory, useParams, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { campoRequerido } from "./common/helpers";

const EditarNoticias = (props) => {
  const [noticia, setNoticia] = useState({});
  const { id } = useParams();
  const autorRef = useRef("");
  const fechaRef = useRef("");
  const tituloRef = useRef("");
  const categoriaRef = useRef("");
  const resumenRef = useRef("");
  const contenidoRef = useRef("");
  const imgGrandeRef = useRef("");
  const imgChicaRef = useRef("");
  const [error, setError] = useState(false);

  let history = useHistory();
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    consultarNoticia();
    // eslint-disable-next-line
  }, []);

  const consultarNoticia = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      if (respuesta.status === 200) {
        const noticiaEncontrada = await respuesta.json();
        setNoticia(noticiaEncontrada);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      campoRequerido(autorRef.current.value) &&
      campoRequerido(fechaRef.current.value) &&
      campoRequerido(tituloRef.current.value) &&
      campoRequerido(categoriaRef.current.value) &&
      campoRequerido(resumenRef.current.value) &&
      campoRequerido(contenidoRef.current.value) &&
      campoRequerido(imgGrandeRef.current.value) &&
      campoRequerido(imgChicaRef.current.value)
    ) {
      setError(false);
      try {
        const noticiaModificada = {
          autor: autorRef.current.value,
          fecha: fechaRef.current.value,
          titulo: tituloRef.current.value,
          categoria: categoriaRef.current.value,
          resumen: resumenRef.current.value,
          contenido: contenidoRef.current.value,
          imgGrande: imgGrandeRef.current.value,
          imgChica: imgChicaRef.current.value,
        };

        const respuesta = await fetch(`${URL}/${noticia._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(noticiaModificada),
        });
        if (respuesta.status === 200) {
          Swal.fire(
            "Noticia editada",
            "La noticia fue modificada correctamente",
            "success"
          );
          history.push("/login/admin/noticias");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <Container className="my-5">
      <Link to="/login/admin/noticias" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
      <Form onSubmit={handleSubmit}>
        <h3 className="my-5 text-center">Editar Noticia</h3>
        <p>
          Complete todos los campos del siguiente formulario para editar la
          noticia.
        </p>
        <br />
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <Form.Group>
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Armando Paredes"
                defaultValue={noticia.autor}
                ref={autorRef}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-3 col-sm-12">
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                defaultValue={noticia.fecha}
                ref={fechaRef}
              ></Form.Control>
            </Form.Group>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-9 col-sm-12">
            <Form.Group>
              <Form.Label>T??tulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="La palabra de Marcelo Tinelli luego de que..."
                defaultValue={noticia.titulo}
                ref={tituloRef}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-3 col-sm-12">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Categor??a</Form.Label>
              <Form.Control
                as="select"
                defaultValue={noticia.categoria}
                ref={categoriaRef}
              >
                <option defaultValue={noticia.categoria} disabled="disabled">
                  {noticia.categoria}
                </option>
                {props.categorias.map((categoria, i) => {
                  return <option key={i}>{categoria.tituloCategoria}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mt-4">
          <Form.Label>Resumen</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Luego de que trascendiera la noticia de la ola de contagios de Covid-19 en Showmatch: La Academia 2021 (El Trece), fue el mismo Marcelo Tinelli quien emiti??..."
            defaultValue={noticia.resumen}
            ref={resumenRef}
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="A ra??z de las informaciones que circularon en las ??ltimas horas, desde LaFlia queremos aclarar que los casos positivos de COVID-19 que involucran a trabajadores de la productora no se dieron de forma simult??nea como producto de una negligencia, sino que han ido apareciendo alternadamente en las ??ltimas semanas..."
            defaultValue={noticia.contenido}
            ref={contenidoRef}
          />
        </Form.Group>
        <Form.Group className="mt-4 row">
          <div className="col-md-6 col-sm-12 text-center">
            <Form.Label>Imagen grande</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://www.contextotucuman.com//uploads/2021/05/26/13546_1.jpg"
              defaultValue={noticia.imgGrande}
              ref={imgGrandeRef}
            />
            <Form.Text className="text-muted">
              Introduzca la URL de la imagen que quieras que aparezca en la
              p??gina de la noticia
            </Form.Text>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <Form.Label className="mtSM">Imagen miniatura</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://www.contextotucuman.com//uploads/2021/05/26/13546_1.jpg"
              defaultValue={noticia.imgChica}
              ref={imgChicaRef}
            />
            <Form.Text className="text-muted">
              Introduzca la URL de la imagen que quieras que aparezca en la
              miniatura de la noticia
            </Form.Text>
          </div>
        </Form.Group>
        <Button type="submit" className="mt-5 w-100" size="lg" block>
          Editar noticia
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

export default withRouter(EditarNoticias);
