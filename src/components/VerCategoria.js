import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const VerCategoria = (props) => {
  const [categoria, setCategoria] = useState({});
  const { id } = useParams();

  const URL = process.env.REACT_APP_API_URL_Categorias;

    useEffect(() => {
        consultarCategoria();
      }, []);
    
      const consultarCategoria = async () => {
        try {
          const respuesta = await fetch(URL + "/" + id);
          console.log(respuesta);
          if (respuesta.status === 200) {
            const categoriaEncontrada = await respuesta.json();
            setCategoria(categoriaEncontrada);
            console.log(categoriaEncontrada)
          }
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <Container>
      <h2 className="text-center my-4">Noticias en categoría: {categoria.tituloCategoria}</h2>
      <ul>
          {/* objeto.map(elemento=>{
              console.log(elemento)
          }) */}
          {/* props.noticias.map((noticia.categoria)=>{
              console.log(elemento)
          }) */}
        {props.categorias.map((categoria) => (
          <li
            categoria={categoria}
            key={categoria._id}
            consultarAPICat={props.consultarAPI}
          ></li>
        ))}
      </ul>
    </Container>
  );
};

export default VerCategoria;
