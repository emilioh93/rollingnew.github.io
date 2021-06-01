import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const DetalleNoticia = (props) => {
  return (
   <Container>
     <p className='my-3'>{props.noticia.fecha}</p>
     <p className='my-3'>{props.noticia.autor}</p>
     <h1 className='text-center my-3'>{props.noticia.titulo}</h1>
     <p className='my-3'>{props.noticia.resumen}</p>
     <Image className='my-3' src={props.noticia.imgGrande} fluid />
     <p className='my-3'>{props.noticia.contenido}</p>
   </Container>
  );
};

export default DetalleNoticia;