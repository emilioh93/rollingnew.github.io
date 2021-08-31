import React from 'react';
import {Card} from "react-bootstrap";

 const Noticia = (props) => {
     return(
<Card className="mx-4 sombra">
<Card.Img variant="top" src={props.imgChica} />
<Card.Body>
  <Card.Title>{props.titulo}</Card.Title>
  <Card.Text>{props.resumen}</Card.Text>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
);
}
export default Noticia;