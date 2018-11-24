import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Formulaire from './Formulaire';
import Avis from './Avis';
import './Annonce.css'
import Tableau from "./Tableau"
import Calendrier from "./Calendrier"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Carte from './Carte';
import CarouselImage from './CarouselImage';


class Annonce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            titre: '',
            theme: '',
            description: '',
            type_logement: '',
            equipement: '',
            localisation: '',
            image1: '',
            image2: '',
            image3: '',
            prix: 0,
            dateAller: 0,
            dateRetour: 0,
        }
        this.createNotification = this.createNotification.bind(this);
        this.changeDateAller = this.changeDateAller.bind(this);
        this.changeDateRetour = this.changeDateRetour.bind(this);
    }

    componentDidMount() {
        const { titre } = this.props.location.state;
        const { theme } = this.props.location.state;
        const { description } = this.props.location.state;
        const { type_logement } = this.props.location.state;
        const { equipement } = this.props.location.state;
        const { localisation } = this.props.location.state;
        const { image1 } = this.props.location.state;
        const { image2 } = this.props.location.state;
        const { image3 } = this.props.location.state;
        const { prix } = this.props.location.state;
        this.setState({
            titre: titre,
            theme: theme,
            description: description,
            type_logement: type_logement,
            equipement: equipement,
            localisation: localisation,
            image1: image1,
            image2: image2,
            image3: image3,
            prix: prix,
        })
    }


    createNotification() {
        NotificationManager.success('Merci a vous !', 'Votre commande a bien été enregistrée');
    };

    changeDateAller(event) {
        this.setState({
            dateAller: event.target.value,
        })
    }

    changeDateRetour(event) {
        this.setState({
            dateRetour: event.target.value,
        })
    }



    render() {
        return (
            <div className="Annonce">
                <NotificationContainer />
                <Container id="haut">

                    <Row>
                        <Col xs={{ size: 12 }} sm={{ size: 8 }}>
                            <Row className="lien">
                                <Col xs={{ size: 'auto' }} sm={{ size: 'auto', offset: 3 }}><a href="#description">Description</a></Col>
                                <Col xs={{ size: 'auto', offset: 1 }} sm={{ size: 'auto', offset: 1 }}><a href="#details">Details</a></Col>
                                <Col xs={{ size: 'auto', offset: 1 }} sm={{ size: 'auto', offset: 1 }}><a href="#avis">Avis</a></Col>
                            </Row>
                            <CarouselImage
                                images={[this.state.image1, this.state.image2, this.state.image3]}
                            />
                        </Col>
                        <Col xs={{ size: 12 }} sm={{ size: 3, offset: 1 }}>

                            <div className="formulaire">
                                <h3 className="centerTitle">Réserver ce bien</h3>
                                <Formulaire
                                    createNotification={this.createNotification}
                                    prix={this.state.prix}
                                    changeDateAller={this.changeDateAller}
                                    dateAller={this.state.dateAller}
                                    changeDateRetour={this.changeDateRetour}
                                    dateRetour={this.state.dateRetour}

                                />
                            </div>
                        </Col>
                    </Row>
                    <Row id="description" className="module">
                        <Col xs={{ size: 12 }} sm={{ size: 8 }}>
                            <hr />
                            <Col className="centerTitle"><h2>Description</h2></Col>
                            <Col className=""><h4>{this.state.titre}</h4></Col>
                            <Col className="centerText">{this.state.description}</Col>
                            <Col className="centerTitle marge-top"><h3>Equipement</h3></Col>
                            <Col className="centerText">{this.state.equipement}</Col>
                        </Col>
                    </Row>
                    <Row id="description" className="module">
                        <Col xs={{ size: 12 }} sm={{ size: 8 }}>
                            <hr />
                            <Col className="centerTitle"><h2>Disponibilité</h2></Col>
                            <Calendrier />
                        </Col>
                    </Row>
                    <Row id="details" className="module">
                        <Col xs={{ size: 12 }} sm={{ size: 8 }}>
                            <hr />
                            <Col className="centerTitle"><h2>Détails</h2></Col>

                            <Tableau />
                            <Row>
                                <Col className="centerTitle"><h2>Region</h2>
                                    <Carte region={this.state.localisation} />
                                </Col>
                            </Row>
                        </Col>
                        <Row id="avis" className="module pb-5 ">
                            <Col xs={{ size: 12 }} sm={{ size: 8 }}>
                                <hr />
                                <Col className="centerTitle "><h2>Avis</h2></Col>
                                <Avis
                                    name="F. Julien"
                                    comment="Très bonne soirée  et l endroit est juste trop top. Hôte sympa et arrangeant. À faire !"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuZfNgsoQy6_mFR7rZ02z1grXiL8zFYzlevcxkO59PzSInG5g"
                                    note="3"
                                />
                                <Avis
                                    name="L. Orane"
                                    comment="Rien à redire sur le service. Nous sommes très satisfaits et nous le conseillerons à nos amis. A essayer mais avec un ciel mieux étoilé"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuZfNgsoQy6_mFR7rZ02z1grXiL8zFYzlevcxkO59PzSInG5g"
                                    note="5"
                                />
                            </Col>
                        </Row>
                    </Row>

                </Container >
            </div >)
    }
}

export default Annonce;