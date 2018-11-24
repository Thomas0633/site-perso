import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap';
import './SearchBarAccueil.css';
import { Link } from "react-router-dom";

class SearchBarAccueil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            critereRegion: '',
            critereType: '',
            critereTheme: '',
            cards:[],
            resultCards: []
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div className='ml-5 mr-5 containerSerachBar img-fluid'>
                <Form className='d-flex justify-content-center align-items-center backgroundSearchBar p-3'>
                    <Row form className='w-100'>
                        <Col xs='12' md='4'>
                            <FormGroup className='w-100 ml-2 mr-2 mb-0'>
                                <Input type="select" name="critereRegion" id="region" value={this.state.critereRegion} onChange={this.handleChange}>
                                    <option value='' defaultValue>Région</option>
                                    <option value='Sud-Ouest'>Sud-Ouest</option>
                                    <option value='Ouest'>Ouest</option>
                                    <option value='Nord-Ouest'>Nord-Ouest</option>
                                    <option value='Nord'>Nord</option>
                                    <option value='Nord-Est'>Nord-Est</option>
                                    <option value='Est'>Est</option>
                                    <option value='Sud-Est'>Sud-Est</option>
                                    <option value='Sud'>Sud</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs='12' md='4'>
                            <FormGroup className='w-100 ml-2 mr-2 mb-0'>
                                <Input type="select" name="critereType" id="type" value={this.state.critereType} onChange={this.handleChange}>
                                    <option value='' defaultValue>Type d'hébergement</option>
                                    <option value='Bulle'>Bulle</option>
                                    <option value='Cabanne dans les arbres'>Cabane dans les arbres</option>
                                    <option value='Dome'>Dome</option>
                                    <option value="Habitation sur l'eau">Habitation sur l'eau</option>
                                    <option value='Igloo'>Igloo</option>
                                    <option value="Nid d'amour">Nid d'amour</option>
                                    <option value='Roulotte'>Roulotte</option>
                                    <option value='Tente suspendue'>Tente suspendue</option>
                                    <option value='Tipi'>Tipi</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs='12' md='4'>
                            <FormGroup className='w-100 ml-2 mr-2 mb-0'>
                                <Input type="select" name="critereTheme" id="theme" value={this.state.critereTheme} onChange={this.handleChange}>
                                    <option value='' defaultValue>Thème</option>
                                    <option value='Aérien'>Aérien</option>
                                    <option value='Eco-responsable'>Eco-responsable</option>
                                    <option value='Famille'>Famille</option>
                                    <option value='Mer'>Mer</option>
                                    <option value='Montagne'>Montagne</option>
                                    <option value='Nature'>Nature</option>
                                    <option value='Neige'>Neige</option>
                                    <option value='Détente'>Détente</option>
                                    <option value='Romantique'>Romantique</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

                <Link to={{ pathname: "/latipik/catalogue",
                state: {
                    critereRegion: this.state.critereRegion,
                    critereType: this.state.critereType,
                    critereTheme: this.state.critereTheme,
                    cards: this.state.cards,
                    resultCards: this.state.resultCards,
                },
                fonction: this.search}}>
                    <Button outline className='mt-5 buttonSearchAccueil' size="lg">Rechercher</Button>
                </Link>
            </div>
        )
    }
}

export default SearchBarAccueil;