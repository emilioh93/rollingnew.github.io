import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import FormNoticias from './FormNoticias';

const Detalle = (props) => {

    return (
        <Container>
            <ListGroup>
                {props.noticias.map((noticia)=><FormNoticias noticia = {noticia} key = {noticia.id} consultarAPI={props.consultarAPI}></FormNoticias> )}
            </ListGroup>
        </Container>
    );
};

export default Detalle;