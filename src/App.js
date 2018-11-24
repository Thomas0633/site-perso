import React from 'react';

import { Route, Switch } from "react-router-dom";

import './App.css';
import Cv from './components/cv/Cv';
import LaTipik from './components/la-tipik/LaTipik';
import MultiApp from './components/multi-app/MultiApp';

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
      </Switch>
    </div>
  );
}

export default App;
