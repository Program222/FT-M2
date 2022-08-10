import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import About from './About.jsx';
import Ejemplo from './Ejemplo.jsx';
import NavBar from './NavBar.jsx';

function Home() {
  return (
    <div>
      <h2>{props.text}, Soy Henry!!</h2>
    </div>
  );
};

 // SI A DONDE QUEREMOS IR SERIA /HOME :

// [path] = ruta.includes(/) cuando incluye dicha parte ya la acepta automaticamente
// [exact path] = puede aceptar ruta = /home || ruta = /home/                                |
// [strict path] = solamente acepta ruta = /home
// [sensitive path] = distingue mayusculas y minusculas                                      |
//--------------------------------------------------------------------------------------------
const Root = (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/home" render={()=> <Home text="27c"/>}></Route>
       
      <Route path="/about">
        <About />
      </Route>
      <Route path="/aboutttttt">
        <h2>Aboutttttt</h2>
      </Route>
      <Route path="/about/other">
        <h2>About Other</h2>
      </Route>
      <Route path="/ejemplo">
        <Ejemplo nombre="Toni" apellido="Tralice"/>
      </Route>
      <Route path="/">
        <h2>Default if no match</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

