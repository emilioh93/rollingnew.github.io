import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
const DetalleNoticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState({});
  const URL = process.env.REACT_APP_API_URL;

  console.log(id);

  useEffect(() => {
    consultarNoticia();
  }, []);

  const consultarNoticia = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const noticiaEncontrada = await respuesta.json();
        setNoticia(noticiaEncontrada);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <p className="my-3">{noticia.fecha}</p>
      <p className="my-3">{noticia.autor}</p>
      <hr className="my-3"></hr>
      <p className="my-3">{noticia.categoria}</p>
      <hr className="my-3"></hr>
      <h1 className="text-center my-3">{noticia.titulo}</h1>
      <p className="my-3">{noticia.resumen}</p>
      <Image className="my-3" src={noticia.imgGrande} fluid />
      <p className="my-3">{noticia.contenido}</p>
      <hr className="my-3" width="75%"></hr>
      <hr className="my-3" width="25%"></hr>
    </Container>
  );
};
export default DetalleNoticia;
