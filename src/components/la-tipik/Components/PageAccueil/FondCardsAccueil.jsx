import React, { Component } from 'react';
import SectionSelect from './SectionSelect';
import LogosAccueil from './LogosAccueil';

const urlLink = "http://92.175.11.66:3000/create/api/rents";


class FondCardsAccueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notreSelection: [{
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }, {
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }, {
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }],
            theme: [{
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }, {
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }, {
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }],
            type: [{
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }, {
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }, {
                id: 0,
                titre: "",
                theme: '',
                description: "",
                type_logement: '',
                equipement: '',
                localisation: '',
                image1: "",
                image2: '',
                image3: '',
                prix: 0,
            }],
        }
    }

    componentDidMount() {
        fetch(urlLink)
            .then(res => res.json())
            .then(data => this.setState({
                notreSelection: data.filter(annonce => annonce.id === 5 || annonce.id === 6 || annonce.id === 7),
                theme: data.filter(annonce => annonce.id === 8 || annonce.id === 9 || annonce.id === 10),
                type: data.filter(annonce => annonce.id === 11 || annonce.id === 12 || annonce.id === 13), 
            })
            )
    }

    render() {
        
        return (
            <div>
                {/* Logos LogosAccueil */}
                <LogosAccueil />
                {/* Logos LogosAccueil */}


                {/* Selection de cards */}
                <SectionSelect
                    backgroundColor="backgroundPlanchesFonce"
                    backgroundColor2=""
                    title="Notre sélection"
                    colorTxt="colorTxt"
                    objetAnnonce={this.state.notreSelection}
                />
                <SectionSelect
                    backgroundColor="backgroundPlanchesWhite"
                    backgroundColor2="backgroundPlanchesWhite2"
                    title="Sélection par thème"
                    colorTxt="colorTxt2"
                    objetAnnonce={this.state.theme}
                />
                <SectionSelect
                    backgroundColor="backgroundPlanchesFonce"
                    backgroundColor2=""
                    title="Sélection par type d'hébergement"
                    colorTxt="colorTxt"
                    objetAnnonce={this.state.type}
                />
                {/* Selection de cards */}
            </div>
        )
    }
}

export default FondCardsAccueil;