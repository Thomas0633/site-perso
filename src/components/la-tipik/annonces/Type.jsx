import React, { Component } from 'react';
import './Type.css'

class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let type = "";
        switch (this.props.type) {
            case "Bulle":
                type = <img className="image" src="/ressources/la-tipik/image/logos/BulleLogo.png" alt="Bulle" />
                break;
            case "Cabane dans les arbres":
                type = <img className="image" src="/ressources/la-tipik/image/logos/Cabane-tree.png" alt="Cabane-tree" />
                break;
            case "Dome":
                type = <img className="image" src="/ressources/la-tipik/image/logos/Dome.png" alt="Dome" />
                break;
            case "Habitation sur l'eau":
                type = <img className="image" src="/ressources/la-tipik/image/logos/MaisonEau.png" alt="Maison Eau" />
                break;
            case "Sud":
                type = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/8.png" alt="Sud" />
                break;
            case "Iglow":
                type = <img className="image" src="/ressources/la-tipik/image/logos/Iglow.png" alt="Iglow" />
                break;
            case "Nid d'amour":
                type = <img className="image" src="/ressources/la-tipik/image/logos/loveNid.png" alt="Nid d'amour" />
                break;
            case "Roulotte":
                type = <img className="image" src="/ressources/la-tipik/image/logos/roulotte.png" alt="Roulotte" />
                break;
            case "Tente suspendu":
                type = <img className="image" src="/ressources/la-tipik/image/logos/TenteSuspendu.png" alt="Tente suspendu" />
                break;
            case "Tipi":
                type = <img className="image" src="/ressources/la-tipik/image/logos/tipiLogo.png" alt="Tipi" />
                break;
            default:
                type = <p>Pas définit</p>
                break;
        }
        return (
            <div className="Type">
                {type}
            </div>
        )
    }
}


export default Type;