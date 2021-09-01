import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Principal from "./components/Principal";
import Categoria from "./components/Categoria";
import Covid from "./components/Covid";
import PaginaCategoria from "./components/PaginaCategoria";
import Admin from "./components/Admin";
import AdminNoticias from "./components/AdminNoticias";
import AdminCategorias from "./components/AdminCategorias";
import FormNoticias from "./components/FormNoticias";
import FormCategorias from "./components/FormCategorias";
import Suscripcion from "./components/Suscripcion";
import Login from "./components/Login";
import Error404 from "./components/Error404";
import DetalleNoticia from "./components/DetalleNoticia";
import { useState, useEffect, useContext } from "react";
import Registro from "./components/Registro";
import EditarNoticias from "./components/EditarNoticias";
import EditarCategorias from "./components/EditarCategorias";
import VerCategoria from "./components/VerCategoria";
import { UserContext } from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import Apis from "./components/Apis";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const URLCat = process.env.REACT_APP_API_URL_Categorias;
  const [noticias, setNoticias] = useState([{}]);
  const [categorias, setCategorias] = useState([{}]);
  const [dolar, setDolar] = useState();
  const [clima, setClima] = useState();
  const { setUser } = useContext(UserContext);

  const consultarAPICat = async () => {
    try {
      const respuesta = await fetch(URLCat);
      if (respuesta.status === 200) {
        // Guardar datos en el state
        const datos = await respuesta.json();
        setCategorias(datos);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        // Guardar datos en el state
        const datos = await respuesta.json();
        setNoticias(datos);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const consultarUser = async () => {
    if (localStorage.getItem("user")) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  const consultarUSD = async () => {
    await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((response) => response.json())
      .then((data) => setDolar(data));
  };

  const consultarClima = async () => {
    await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Tucuman&units=metric&appid=7df71142edc80b63d4340159dc295641"
    )
      .then((response) => response.json())
      .then((data) => setClima(data));
  };

  useEffect(() => {
    consultarAPI();
    consultarAPICat();
    consultarUser();
    consultarUSD();
    consultarClima();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Apis dolar={dolar} clima={clima}></Apis>
          <Principal></Principal>
          <Covid></Covid>
          {categorias.map((categoria, i) => {
            return (
              <Categoria
                key={i}
                titulo={categoria.tituloCategoria}
                noticias={noticias.filter(
                  (noticia) => noticia.categoria === categoria.tituloCategoria
                )}
                categorias={categorias}
              ></Categoria>
            );
          })}
        </Route>
        <Route exact path="/Actualidad">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Actualidad"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/Espectáculos">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Espectáculos"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/Tecnología">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Tecnología"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/Deportes">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Deportes"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/Economía">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Economía"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/Política">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Política"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/Salud">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Salud"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/Fotografía">
          <PaginaCategoria
            noticias={noticias}
            tituloCategoria="Fotografía"
          ></PaginaCategoria>
        </Route>
        <Route exact path="/noticias/:id">
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/login">
          <Login noticias={noticias} categorias={categorias}></Login>
        </Route>
        <Route exact path="/registro">
          <Registro></Registro>
        </Route>
        <PrivateRoute exact path="/login/admin">
          <Admin version="1.0"></Admin>
        </PrivateRoute>
        <PrivateRoute exact path="/login/admin/noticias">
          <AdminNoticias
            consultarAPI={consultarAPI}
            noticias={noticias}
          ></AdminNoticias>
        </PrivateRoute>
        <PrivateRoute exact path="/login/admin/noticias/nueva">
          <FormNoticias categorias={categorias}></FormNoticias>
        </PrivateRoute>
        <PrivateRoute exact path="/login/admin/categorias/">
          <AdminCategorias
            consultarAPICat={consultarAPICat}
            categorias={categorias}
          ></AdminCategorias>
        </PrivateRoute>
        <PrivateRoute exact path="/login/admin/categorias/nueva">
          <FormCategorias></FormCategorias>
        </PrivateRoute>
        <PrivateRoute exact path="/login/admin/noticias/editar/:id">
          <EditarNoticias categorias={categorias}></EditarNoticias>
        </PrivateRoute>
        <PrivateRoute exact path="/login/admin/categorias/editar/:id">
          <EditarCategorias categorias={categorias}></EditarCategorias>
        </PrivateRoute>
        <PrivateRoute exact path="/login/admin/categorias/ver/:id">
          <VerCategoria
            noticias={noticias}
            categorias={categorias}
          ></VerCategoria>
        </PrivateRoute>
        <Route exact path="/suscripcion">
          <Suscripcion></Suscripcion>
        </Route>
        <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
