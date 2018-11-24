import React, { Component } from 'react';
import './Carte.css'

class Carte extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let region = "";
        switch (this.props.region) {
            case "Nord":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/3.png" alt="Nord" />
                break;
            case "Nord-Est":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/22.png" alt="Nord-Est" />
                break;
            case "Est":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/2.png" alt="Est" />
                break;
            case "Sud-Est":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/5.png" alt="Sud-Est" />
                break;
            case "Sud":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/8.png" alt="Sud" />
                break;
            case "Sud-Ouest":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/18.png" alt="Sud-Ouest" />
                break;
            case "Ouest":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/17.png" alt="Ouest" />
                break;
            case "Nord-Ouest":
                region = <img className="image" src="http://www.hebergement-insolite.com/img/carte_g_r/19.png" alt="Nord-Ouest" />
                break;
            default:
                region = <p>En France</p>
                break;
        }
        return (
            <div className="Carte">
                {region}
            </div>
        )
    }
}


export default Carte;