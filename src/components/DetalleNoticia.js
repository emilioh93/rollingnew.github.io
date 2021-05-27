import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const DetalleNoticia = (props) => {
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionNoticia, setDescripcionNoticia] = useState("");
  const [imagen, setImagen] = useState("");
  const [detalle, setDetalle] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const [categoria, setCategoria] = useState(false);
  const [error, setError] = useState(false);

  const URL = process.env.REACT_APP_API_URL;

  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    //validaciones

    if (
      tituloNoticia.trim() !== "" &&
      descripcionNoticia !== "" &&
      imagen !== "" &&
      detalle !== "" &&
      autor !== "" &&
      fecha !== ""&&
      categoria !== true
    ) {
      setError(false);

      const noticia = {
        tituloNoticia: tituloNoticia,
        descripcionNoticia: descripcionNoticia,
        imagen: imagen,
        detalle: detalle,
        autor: autor,
        fecha: fecha,
      };

      console.log(noticia);

      try {
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticia),
        };

        const response = await fetch(URL, cabecera);

        console.log(response);

        if (response.status === 200) {
          Swal.fire(
            "Noticia agregada!",
            "La noticia se agregó correctamente",
            "success"
          );
          e.target.reset();

          props.consultarAPI();
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Ocurrió un error",
          "Intentelo de nuevo en unos minutos",
          "error"
        );
      }
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Container>
        <Form className="my-5" onSubmit={handleSubmit}>
          <h1 className="my-5 text-center">Agregar una nueva noticia</h1>
          <Form.Group>
            <Form.Label>Título de la noticia*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese un título para la noticia"
              onChange={(e) => setTituloNoticia(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Bajada*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una breve descripción de la noticia."
              onChange={(e) => setDescripcionNoticia(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <h3 className="text-center my-3">Categoría</h3>
          <div className="text-center my-4">
            <Form.Check
              inline
              type="radio"
              label="Actualidad"
              name="categoria"
              value="actualidad"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Espectáculos"
              name="categoria"
              value="espectaculos"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Tecnología"
              name="categoria"
              value="tecnologia"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Deportes"
              name="categoria"
              value="deportes"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Economía"
              name="categoria"
              value="economia"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Política"
              name="categoria"
              value="politica"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Salud"
              name="categoria"
              value="salud"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Fotografía"
              name="categoria"
              value="fotografia"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Group className="my-3">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="img"
                placeholder="Ingrese una imagen para la noticia"
                onChange={(e) => setImagen(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Detalle de la noticia*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escriba el detalle de su noticia."
                onChange={(e) => setDetalle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Autor*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del autor."
                onChange={(e) => setAutor(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Fecha de actualización de noticia*</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese la fecha de actualización."
                onChange={(e) => setFecha(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </div>
          <Button variant="danger" type="submit" className="w-100">
            Agregar noticia
          </Button>
          {error === true ? (
            <Alert variant="danger" className="my-5">
              Faltan cargar datos obligatorios para publicar la noticia.
            </Alert>
          ) : null}
        </Form>
      </Container>
    </div>
  );
};

export default DetalleNoticia;