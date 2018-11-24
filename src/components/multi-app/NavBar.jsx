import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div className='backgroundNavBar d-flex align-items-center justify-content-center'>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 mr-4 linkNav' activeClassName='active' exact to="/multi-app/">Accueil</NavLink>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 mr-4 linkNav' activeClassName='active' exact to="/multi-app/search">Search 1</NavLink>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/multi-app/search2">Search 2</NavLink>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/multi-app/compteur">Compteur</NavLink>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/multi-app/panier">Panier</NavLink>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/multi-app/carouselcards">Carousel</NavLink>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/multi-app/calcul">Calcul</NavLink>
                <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 linkNav' activeClassName='active' to="/multi-app/todolist">To do List</NavLink>
            </div>
        )
    }
}

export default NavBar;