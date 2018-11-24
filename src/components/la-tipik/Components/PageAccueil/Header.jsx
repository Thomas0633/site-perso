import React, { Component } from "react";
import "./Header.css";
import SearchBarAccueil from './SearchBarAccueil.jsx';
import Rotate from 'react-reveal/Rotate'


class Header extends Component {
    render() {
        return (
        
        <header className='image-fond-accueil'>
            <img  className="img-fluid img-header w-100 " src="/ressources/la-tipik/image/atacama.jpg" alt='Fond header' />
            <div className="container-header w-100 text-center align-items-center">
                <h1 className="slogan responsiveSize">
                <Rotate cascade duration={1000}>                  
                Offrez-vous la magie d'une nuit insolite ! 
                </Rotate>                 
                </h1>
                <div className="button-position">
                    <SearchBarAccueil />
                </div>             
            </div>
        </header>
    );
}
}

export default Header;

