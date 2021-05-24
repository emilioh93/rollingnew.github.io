import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
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

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
          <Principal></Principal>
          <Covid></Covid>
          <Categoria titulo="Economía"></Categoria>
          <Categoria titulo="Política"></Categoria>
          <Categoria titulo="Salud"></Categoria>
        </Route>
        <Route exact path="/actualidad">
          <PaginaCategoria tituloCategoria="Actualidad"></PaginaCategoria>
        </Route>
        <Route exact path="/espectaculos">
          <PaginaCategoria tituloCategoria="Espectáculos"></PaginaCategoria>
        </Route>
        <Route exact path="/tecnologia">
          <PaginaCategoria tituloCategoria="Tecnología"></PaginaCategoria>
        </Route>
        <Route exact path="/deportes">
          <PaginaCategoria tituloCategoria="Deportes"></PaginaCategoria>
        </Route>
        <Route exact path="/economia">
          <PaginaCategoria tituloCategoria="Economía"></PaginaCategoria>
        </Route>
        <Route exact path="/politica">
          <PaginaCategoria tituloCategoria="Política"></PaginaCategoria>
        </Route>
        <Route exact path="/salud">
          <PaginaCategoria tituloCategoria="Salud"></PaginaCategoria>
        </Route>
        <Route exact path="/fotografia">
          <PaginaCategoria tituloCategoria="Fotografía"></PaginaCategoria>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>

        {/* path del admin */}
        <Route exact path="/login/admin">
          <Admin version="1.0"></Admin>
        </Route>
        <Route exact path="/login/admin/noticias">
          <AdminNoticias></AdminNoticias>
        </Route>
        <Route exact path="/login/admin/noticias/nueva">
          <FormNoticias></FormNoticias>
        </Route>
        <Route exact path="/login/admin/categorias">
          <AdminCategorias></AdminCategorias>
        </Route>
        <Route exact path="/login/admin/categorias/nueva">
          <FormCategorias></FormCategorias>
         </Route> 
        {/* fin del path */}
         
        <Route exact path="/suscripcion">
          <Suscripcion></Suscripcion>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
