import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

const FormNoticias = (props) => {
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [resumen, setResumen] = useState("");
  const [contenido, setContenido] = useState("");
  const [imgGrande, setImgGrande] = useState("");
  const [imgChica, setImgChica] = useState("");
  const [error, setError] = useState(false);

  const fechaMoment = moment();
  moment.locale("es");
  fechaMoment.format("Do MMMM YYYY");
  const URL = process.env.REACT_APP_API_URL;
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      autor.trim() !== "" &&
      fecha.trim() !== "" &&
      titulo.trim() !== "" &&
      resumen.trim() !== "" &&
      contenido.trim() !== "" &&
      imgGrande.trim() !== "" &&
      imgChica.trim() !== ""
    ) {
      setError(false);

      const noticia = {
        autor,
        fecha,
        titulo,
        categoria,
        resumen,
        contenido,
        imgGrande,
        imgChica,
      };

      try {
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticia),
        };

        const response = await fetch(URL, cabecera);
        if (response.status === 201) {
          Swal.fire(
            "Noticia agregada",
            "La noticia se cargó correctamente",
            "success"
          );
          e.target.reset();
          history.push("/login/admin/noticias");
        }
      } catch (error) {
        console.log(error);
        Swal.fire("Error", "Inténtelo nuevamente en unos minutos", "error");
      }
    } else {
      setError(true);
    }
  };

  const retornarNoticias = ({ history }) => {
    window.location.href = "/login/admin/noticias";
  };

  return (
    <Container className="my-5">
      <Button onClick={retornarNoticias}>Volver</Button>
      <Form onSubmit={handleSubmit}>
        <h3 className="my-5 text-center">Agregar Noticia</h3>
        <p>
          Complete todos los campos del siguiente formulario para agregar una
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
                onChange={(e) => setAutor(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-3 col-sm-12">
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setFecha(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-9 col-sm-12">
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="La palabra de Marcelo Tinelli luego de que..."
                onChange={(e) => setTitulo(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-3 col-sm-12">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option disabled="disabled">
                  Seleccione la categoría
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
            placeholder="Luego de que trascendiera la noticia de la ola de contagios de Covid-19 en Showmatch: La Academia 2021 (El Trece), fue el mismo Marcelo Tinelli quien emitió..."
            onChange={(e) => setResumen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="A raíz de las informaciones que circularon en las últimas horas, desde LaFlia queremos aclarar que los casos positivos de COVID-19 que involucran a trabajadores de la productora no se dieron de forma simultánea como producto de una negligencia, sino que han ido apareciendo alternadamente en las últimas semanas..."
            onChange={(e) => setContenido(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-4 row">
          <div className="col-md-6 col-sm-12 text-center">
            <Form.Label>Imagen grande</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://www.contextotucuman.com//uploads/2021/05/26/13546_1.jpg"
              onChange={(e) => setImgGrande(e.target.value)}
            />
            <Form.Text className="text-muted">
              Introduzca la URL de la imagen que quieras que aparezca en la
              página de la noticia
            </Form.Text>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <Form.Label className="mtSM">Imagen miniatura</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://www.contextotucuman.com//uploads/2021/05/26/13546_1.jpg"
              onChange={(e) => setImgChica(e.target.value)}
            />
            <Form.Text className="text-muted">
              Introduzca la URL de la imagen que quieras que aparezca en la
              miniatura de la noticia
            </Form.Text>
          </div>
        </Form.Group>
        <Button type="submit" className="mt-5 w-100" size="lg" block>
          Agregar noticia
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

export default withRouter(FormNoticias);
