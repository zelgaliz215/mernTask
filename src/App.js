//Modulos importados
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Componentes
import Login from './Components/auth/Login';
import NuevaCuenta from './Components/auth/NuevaCuenta';
import Proyectos from './Components/proyectos/Proyectos';

function App() {
  return (
    
    <Router>
      {/* Lo que se va ver en todas las paginas */}
      <Switch> 
        {/* Las paginas  */}
        {/* Pagina principal */}
           <Route exact path="/" component={Login}/>
           <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
           <Route exact path="/proyectos" component={Proyectos}/>

      </Switch>
    </Router>

  );
}

export default App;
