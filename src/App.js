import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Principal from "./components/Principal";
import Seccion from "./components/Seccion";
import covid from "../src/img/covid.png";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
          <Principal></Principal>
          <Seccion titulo="Destacadas"></Seccion>
          <Container>
            <img
              src={covid}
              className="w-100"
              alt="Imagen informativa sobre COVID 19"
            />
          </Container>
          <Seccion titulo="Economía"></Seccion>
          <Seccion titulo="Política"></Seccion>
          <Seccion titulo="Salud"></Seccion>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
