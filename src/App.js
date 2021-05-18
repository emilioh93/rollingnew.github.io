import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Principal from "./components/Principal";
import Categoria from "./components/Categoria";
import Covid from "./components/Covid";

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
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
