import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Categoria from "./Categoria";

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
        console.log(categoriaEncontrada);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">
        Noticias en categoría: {categoria.tituloCategoria}
      </h2>
      <div>
        {props.categorias.map((categoria) => {
          return (
            <Categoria
              titulo={categoria.tituloCategoria}
              noticias={props.noticias.filter(
                (noticia) => noticia.categoria === categoria.tituloCategoria
              )}
              categorias={props.categorias}
            ></Categoria>
          );
        })}
      </div>
    </Container>
  );
};

export default VerCategoria;
