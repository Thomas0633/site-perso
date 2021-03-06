import React from 'react';

import { Route, Switch } from "react-router-dom";

import './App.css';
import Cv from './components/cv/Cv';
import LaTipik from './components/la-tipik/LaTipik';
import MultiApp from './components/multi-app/MultiApp';
import SimpsonQuote from './components/simpson-quote/SimpsonQuote';
import SimpsonFetch from './components/simpson-fetch/SimpsonFetch';
import ChocolateApp from './components/chocolate-box/ChocolateApp';
import FruitsSalad from './components/fruits-salad/FruitsSalad';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <Cv />
          )}
        />
        <Route
          onUpdate={window.scrollTo(0, 0)}
          path="/latipik"
          component={LaTipik}
        />
        <Route
          onUpdate={window.scrollTo(0, 0)}
          path="/multi-app"
          component={MultiApp}
        />
        <Route
          onUpdate={window.scrollTo(0, 0)}
          path="/simpson-quote"
          component={SimpsonQuote}
        />
        <Route
          onUpdate={window.scrollTo(0, 0)}
          path="/simpson-fetch"
          component={SimpsonFetch}
        />
        <Route
          onUpdate={window.scrollTo(0, 0)}
          path="/chocolate-box"
          component={ChocolateApp}
        />
        <Route
          onUpdate={window.scrollTo(0, 0)}
          path="/fruits-salad"
          component={FruitsSalad}
        />
      </Switch>
    </div>
  );
}

export default App;
