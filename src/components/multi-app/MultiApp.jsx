import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './multiApp.css';
import Accueil from './accueil/Accueil';
import NavBar from './NavBar';
import Calcul from './calc/CalculCalc';
import Compteur from './compteur/Compteur';
import Panier from './panier/Panier';
import CarouselCards from './carousel/CarouselCards';
import Search from './search/Search'
import Search2 from './search2/Search2';
import ToDoList from './todolist/ToDoList';

class MultiApp extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/multi-app/" component={Accueil} />
          <Route path="/multi-app/search" component={Search} />
          <Route path="/multi-app/search2" component={Search2} />
          <Route path="/multi-app/compteur" component={Compteur} />
          <Route path="/multi-app/panier" component={Panier} />
          <Route path="/multi-app/carouselcards" component={CarouselCards} />
          <Route path="/multi-app/calcul" component={Calcul} />
          <Route path="/multi-app/todolist" component={ToDoList} />
        </Switch>
      </div>
    );
  }
}

export default MultiApp;
