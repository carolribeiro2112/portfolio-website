import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Contato from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/contato"  component={Contato}/>
      <Route path="/portfolio" component={Portfolio}/>
    </Switch>
  )
}

export default Routes;