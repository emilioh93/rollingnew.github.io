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
      <h1 className="text-center my-4">{noticia.titulo}</h1>
      <article className='row'>
      <Image className="my-3 col-sm-12 col-md-5" src={noticia.imgGrande} fluid />
      <h3 className="my-5 col-sm-12 col-md-7">{noticia.resumen}</h3>
      </article>
      <hr className="my-3"></hr>
      <hr className="my-3"></hr>
      <hr className="my-3"></hr>
      <hr className="my-3"></hr>
      <h5 className="my-5">{noticia.contenido}</h5>
      <hr className="my-3"></hr>
      <hr className="my-3"></hr>
    </Container>
  );
};
export default DetalleNoticia;
