import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

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
  // Traer variable de entorno
  const URL = process.env.REACT_APP_API_URL;
  console.log("🚀 ~ file: FormNoticias.js ~ line 20 ~ FormNoticias ~ URL", URL)

  // const leerCategoria = (e) => {
  //   setCategoria(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones
    if (
      autor.trim() !== "" &&
      fecha.trim() !== "" &&
      titulo.trim() !== "" &&
      // categoria.trim() !== "" &&
      resumen.trim() !== "" &&
      contenido.trim() !== "" &&
      imgGrande.trim() !== "" &&
      imgChica.trim() !== ""
    ) {
      // Si está todo ok, envío los datos del producto a la API
      setError(false);

      // Crear objeto
      // const producto = {
      //     nombreProducto: nombreProducto,
      //     precioProducto: precioProducto,
      //     categoria: categoria
      // }
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
      // Envío request POST
      try {
        // Estructura de datos a enviar
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticia),
        };

        const response = await fetch(URL, cabecera);
        console.log(response);
        if (response.status === 201) {
          Swal.fire(
            "Noticia agregada",
            "La noticia se cargó correctamente",
            "success"
          );
          // Reseteo form
          e.target.reset();
          // Actualizar datos
          props.consultarAPI();
          // Redireccionar al componente AdminNoticias
        }
      } catch (error) {
        Swal.fire(
          "Ocurrió un error",
          "Inténtelo nuevamente en unos minutos",
          "error"
        );
      }

      // Espero respuesta
    } else {
      // Si no está todo ok, valido el error
      setError(true);
    }
  };

  return (
    <Container className="my-5">
      <Link exact={true} to="/login/admin/noticias" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"></FontAwesomeIcon>
        Volver al administrador
      </Link>
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
                onChange={(e) => setFecha(e.target.value)}
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
                placeholder="La palabra de Marcelo Tinelli luego de que se confirmaran contagios de coronavirus en ShowMatch"
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
                <option selected="true" disabled="disabled">
                  Seleccione la categoría
                </option>
                <option>Actualidad</option>
                <option>Espectáculos</option>
                <option>Tecnología</option>
                <option>Deportes</option>
                <option>Economía</option>
                <option>Salud</option>
                <option>Política</option>
                <option>Fotografía</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mt-4">
          <Form.Label>Resumen</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Luego de que trascendiera la noticia de la ola de contagios de Covid-19 en Showmatch: La Academia 2021 (El Trece), fue el mismo Marcelo Tinelli quien emitió un comunicado, también compartido por LaFlia, en la que se defiende de las nuevas críticas y asegura que no hubo negligencia."
            onChange={(e) => setResumen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="A raíz de las informaciones que circularon en las últimas horas, desde LaFlia queremos aclarar que los casos positivos de COVID-19 que involucran a trabajadores de la productora no se dieron de forma simultánea como producto de una negligencia, sino que han ido apareciendo alternadamente en las últimas semanas, incluso desde antes de que ShowMatch saliera al aire, y en cada caso hemos aplicado los protocolos de aislamiento recomendados, explicó Marcelo Tinelli a través de su cuenta oficial de Twitter.
            En los post siguientes, admitió: No estamos ajenos a la ola de contagios que atraviesa el país ni exentos de los riesgos de contraer el virus fuera del ámbito laboral, más allá de todas las medidas preventivas que venimos tomando y de los más de cien hisopados por día realizados entre trabajadores de producción, técnica y artística, manifestó, e indicó que,Seguiremos cuidándonos y tratando de alegrar  noche de los argentinos en este difícil momento que nos toca pasar, concluye el te Marcelo Tinelli."
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
        <Button
          type="submit"
          className="mt-5 w-100"
          size="lg"
          block
        >
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

export default FormNoticias;
