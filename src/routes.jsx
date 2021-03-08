import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import EndGame from './pages/EndGame';
import Ranking from './pages/Ranking';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={Game} />
        <Route path="/end-game" exact component={EndGame} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
