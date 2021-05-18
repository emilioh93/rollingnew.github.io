import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Principal from "./components/Principal";
import Seccion from "./components/Seccion";
import Covid from "./components/Covid";

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
          <Principal></Principal>
          <Seccion titulo="Destacadas"></Seccion>
          <Covid></Covid>
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
