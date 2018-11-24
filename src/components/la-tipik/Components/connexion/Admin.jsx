import React, { Component } from 'react';

import { Container, Button, Row, Col, Alert, Input, InputGroup  } from 'reactstrap';

import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import './Admin.css';

const urlLink = "http://92.175.11.66:3000/create/api/rents";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annonces: [],
            visible: true,
            hauteur: 0,
            visibleDel: false,
            idASupprimer:'',
        }
        this.baseState=this.annonces;
        this.supprimer = this.supprimer.bind(this);
        this.onDismiss = this.onDismiss.bind(this);

        this.showDelete = this.showDelete.bind(this);
        this.cache = this.cache.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.lookFor=this.lookFor.bind(this);
        this.fetch = this.fetch.bind(this)

    }

    componentDidMount() {
        this.fetch();
        let hauteur = window.innerHeight - 190;
        this.setState({
            hauteur: hauteur,
        }, () => console.log(this.state));
    }

    fetch(){
        fetch(urlLink)
            .then(res => res.json())
            .then(data => this.setState({
                annonces: data
            })
        );
    }

    onDismiss() {
        this.setState({ visible: false });

      }

    handleChange(e) {
        this.setState({
          value: e.target.value
        });
      }
    lookFor(e){
        e.preventDefault();
        let newList =[];
        return newList = this.state.annonces.filter(list => list.titre.toLowerCase().includes(this.state.value)),
        this.setState({
        annonces: newList,
        
    })
    }
    reset = () => {
        this.fetch()
    }
    supprimer(cible) {
        let validation = window.confirm("Etes vous sûre de vouloir supprimer cette annonce?");
    }

    showDelete(id) {
        this.setState({ 
            visibleDel: true,
            idASupprimer: id,
        });
    }

    supprimer(cible) {
    
            fetch(urlLink + "/" + cible, {
                method: "DELETE"
            })
                .then(res => res)
                .then(() => {
                    fetch(urlLink)
                        .then(res => res.json())
                        .then(data => this.setState({
                            annonces: data
                        })
                        )
                })
        this.cache()
    }

    cache(){
        this.setState({
            visibleDel: false
        })
    }


    render() {
        return (
            <div className='Admin pt-5' style={{ minHeight: this.state.hauteur }}>
                <Alert className='w-25 mr-4 mt-5' id='alertSuccess' color="success" isOpen={this.state.visible} toggle={this.onDismiss} fade={true}>
                    <Row>
                        <Col xs='2' className='pr-0 d-flex align-items-center'>
                            <i class="fas fa-check-circle"></i>
                        </Col>
                        <Col xs='10' className='p-0'>
                            Connexion réussie !<br />
                            Bienvenue Admin !
                        </Col>
                    </Row>
                </Alert>
                <Alert className='w-25 mr-4 mt-5' id='alertSuccess' color="danger" isOpen={this.state.visibleDel} toggle={this.onDismiss} fade={true}>
                    <div class="alerte">
                        <Row>
                            <Col xs='12' className='p-0'>
                                <Row className="element">
                                    <Col xs='12'>
                                Voulez-vous supprimer l'annonce ?
                                </Col>
                                </Row>
                                <Row>
                                    <Col xs='6'>
                                        <Button color="danger" onClick={()=>this.supprimer(this.state.idASupprimer)}>Oui</Button>
                                    </Col>
                                    <Col xs='6'>
                                        <Button color="secondary" onClick={()=> this.cache()}>Non</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Alert>

                <Container className='pt-5'>
                    <h1 className='mb-2 offset-3 pt-5 titleAdmin'>Tableau de bord</h1>
                    <div className="w-75 m-auto pt-5">
                        <h4 className='text-center'>Rechercher un bien</h4>
                        <Row>  
                            <InputGroup>
                                <Col md='12' lg='6' className='pb-2'>
                                    <Input onChange={this.handleChange} value={this.state.value} placeholder="Recherchez un bien ..." />
                                </Col>
                                <Col md='12' lg='6' className='d-flex justify-content-center'>
                                    <Button onClick={this.reset} color="secondary" className='mr-2'>Reset</Button>
                                    <Button onClick={this.lookFor} color="success">Chercher</Button>
                                </Col>
                            </InputGroup>
                        </Row>
                    </div>
                    <h5 className='bonjourAdmin text-right mb-5'>Bonjour Admin</h5>
                    <Row className='rowAdmin'>
                        <Col lg='10'>
                            <Row>
                                {this.state.annonces.map((annonce, index) =>
                                    <Col lg='12' className='mb-5 border rounded cardsAdminPerso'>
                                        <Zoom>
                                            <Row>
                                                <Col lg='6' className='mr-0 p-0'>
                                                    <img src={annonce.image1} alt="Card image cap" className="img-fluid rounded imgCard w-100" />
                                                </Col>
                                                <Col lg='6' className='mr-0 text-center'>
                                                    <h2 className='mb-0 mt-2 titleCardsAdmin'>{annonce.titre}</h2>
                                                    <div className='mt-4'>
                                                        <ul className='ulAdmin pl-0'>
                                                            <li>{annonce.localisation}</li>
                                                            <li>{annonce.theme}</li>
                                                            <li>{annonce.type_logement}</li>
                                                        </ul>
                                                        <h5>{annonce.prix}€ / nuit</h5>
                                                    </div>
                                                    <Row className='mt-4'>
                                                        <Col xs='12' lg='4' className='colButtonAdmin'>
                                                            <Link to={{
                                                                pathname: '/annonce',
                                                                state: {
                                                                    titre: annonce.titre,
                                                                    theme: annonce.theme,
                                                                    description: annonce.description,
                                                                    type_logement: annonce.type_logement,
                                                                    equipement: annonce.equipement,
                                                                    localisation: annonce.localisation,
                                                                    image1: annonce.image1,
                                                                    image2: annonce.image2,
                                                                    image3: annonce.image3,
                                                                    prix: annonce.prix,
                                                                }
                                                            }} className='linkAdmin'>
                                                                <Button color="info" size="lg" className="bouton"><i className="fas fa-search"></i><span className='hideAdd'> Voir l'annonce</span></Button>
                                                            </Link>
                                                        </Col>
                                                        <Col xs='12' lg='4' className='colButtonAdmin'>
                                                            <Button onClick={() => this.showDelete(annonce.id)} color="danger" size="lg" className="bouton"><i className="fas fa-trash-alt"></i><span className='hideAdd'> Supprimer</span></Button>
                                                        </Col>
                                                        <Col xs='12' lg='4' className='colButtonAdmin'>
                                                            <Link
                                                                to={{
                                                                    pathname: '/ajout',
                                                                    state: {
                                                                        ann: {
                                                                            id: annonce.id,
                                                                            titre: annonce.titre,
                                                                            theme: annonce.theme,
                                                                            description: annonce.description,
                                                                            type_logement: annonce.type_logement,
                                                                            equipement: annonce.equipement,
                                                                            localisation: annonce.localisation,
                                                                            image1: annonce.image1,
                                                                            image2: annonce.image2,
                                                                            image3: annonce.image3,
                                                                            prix: annonce.prix,
                                                                            modification: "modif",
                                                                        }
                                                                    }
                                                                }}>
                                                                <Button
                                                                    className="bouton"
                                                                    color="warning"
                                                                    size="lg">
                                                                    <i className="fas fa-pen"></i><span className='hideAdd'> Modifier</span>
                                                                </Button>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Zoom>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col lg='2' className='d-flex justify-content-center mb-5'>
                            <Link to={{
                                pathname: '/ajout',
                                state: { ann: {} }
                            }} className='ajout'>
                                <Button className="bouton" color="success" size='lg'>
                                    <i class="fas fa-plus"></i><span className='hideAdd'> Ajouter une annonce</span>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Admin;