import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Inicio></Inicio>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
