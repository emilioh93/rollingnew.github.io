import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const DetalleNoticia = (props) => {
  return (
   <Container>
     <p className='my-3'>{props.noticias[0].fecha}</p>
     <p className='my-3'>{props.noticias[0].autor}</p>
     <h1 className='text-center my-3'>{props.noticias[0].titulo}</h1>
     <p className='my-3'>{props.noticias[0].resumen}</p>
     <Image className='my-3' src={props.noticias[0].imgGrande} fluid />
  <p className='my-3'>{props.noticias[0].contenido}</p>
   </Container>
  );
};

export default DetalleNoticia;