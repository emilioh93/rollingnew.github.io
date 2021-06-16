import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const DetalleNoticia = (props) => {
  return (
   <Container>
     <p className='my-3'>{props.noticias[0].fecha}</p>
     <p className='my-3'>{props.noticias[0].autor}</p>
     <hr className='my-3'></hr>
     <p className='my-3'>{props.noticias[0].categoria}</p>
     <hr className='my-3'></hr>
     <h1 className='text-center my-3'>{props.noticias[0].titulo}</h1>
     <p className='my-3'>{props.noticias[0].resumen}</p>
     <hr className='my-3' width = '75%'></hr>
     <Image className='my-3' src={props.noticias[0].imgGrande} fluid />
  <p className='my-3'>{props.noticias[0].contenido}</p>
  <hr className='my-3' width = '25%'></hr>
   </Container>
  );
};

export default DetalleNoticia;