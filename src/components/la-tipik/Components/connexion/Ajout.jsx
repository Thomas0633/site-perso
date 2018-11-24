import React, { Component } from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from "react-router-dom";
import './Ajout.css';

const urlLink = "http://92.175.11.66:3000/create/api/rents";

class Ajout extends Component {
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
            modification: '',

        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        const { ann } = this.props.location.state;
        this.setState({
            id: ann.id,
            titre: ann.titre,
            theme: ann.theme,
            description: ann.description,
            type_logement: ann.type_logement,
            equipement: ann.equipement,
            localisation: ann.localisation,
            image1: ann.image1,
            image2: ann.image2,
            image3: ann.image3,
            prix: ann.prix,
            modification: ann.modification,
        })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        let nllAnnonce = {
            titre: this.state.titre,
            theme: this.state.theme,
            description: this.state.description,
            type_logement: this.state.type_logement,
            equipement: this.state.equipement,
            localisation: this.state.localisation,
            image1: this.state.image1,
            image2: this.state.image2,
            image3: this.state.image3,
            prix: this.state.prix,
        }

        if (this.state.modification === "modif") {
            const config = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nllAnnonce),
            };

            fetch(urlLink + "/" + this.state.id, config)           
                .then(() => alert("Votre annonce à bien été modifiée."))
                .then(() => this.props.history.push('/admin'));

        } else {
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nllAnnonce),
            };
            fetch(urlLink, config)
                .then(() => alert("Votre annonce à bien été créee."))
                .then(() => this.props.history.push('/admin'));
        }
    }

    render() {
        return (
            <div className="Ajout h-100 pt-5">
                <Container className='mt-5 pb-5 pt-5'>
                    <h1 className='titleAdmin text-center'>Ajouter un bien</h1>
                    <div className='ml-5 mb-5'>
                        <Link to="/latipik/admin">
                            <Button color="info" >
                                <i className="fas fa-angle-left"></i> Retour
                            </Button>
                        </Link>
                    </div>

                    <Form className=' pl-5 pt-5 pr-5 pb-3 containerForm'>
                        <FormGroup row>
                            <Label htmlFor="exampleEmail" sm={2}>Titre du bien</Label>
                            <Col sm={10}>
                                <Input type="text" name="titre" placeholder="..." value={this.state.titre} onChange={this.onChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="exampleEmail" sm={2}>Thème</Label>
                            <Col sm={10}>
                                <Input type="select" name="theme" placeholder="Aérien  Nature" value={this.state.theme} onChange={this.onChange}>
                                    <option value='' selected>Thème</option>
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
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="examplePassword" sm={2}>Description</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="description" placeholder="..." value={this.state.description} onChange={this.onChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="examplePassword" sm={2}>Type de logement</Label>
                            <Col sm={10}>
                                <Input type="select" name="type_logement" placeholder="Cabane dans les arbres" value={this.state.type_logement} onChange={this.onChange}>
                                    <option value='' selected>Type d'hébergement</option>
                                    <option value='Bulle'>Bulle</option>
                                    <option value='Cabanne dans les arbres'>Cabanne dans les arbres</option>
                                    <option value='Dome'>Dome</option>
                                    <option value="Habitation sur l'eau">Habitation sur l'eau</option>
                                    <option value='Igloo'>Igloo</option>
                                    <option value="Nid d'amour">Nid d'amour</option>
                                    <option value='Roulotte'>Roulotte</option>
                                    <option value='Tente suspendue'>Tente suspendue</option>
                                    <option value='Tipi'>Tipi</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="examplePassword" sm={2}>Equipement</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="equipement" placeholder="..." value={this.state.equipement} onChange={this.onChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="examplePassword" sm={2}>Localisation</Label>
                            <Col sm={10}>
                                <Input type="select" name="localisation" placeholder="Sud-Ouest" value={this.state.localisation} onChange={this.onChange}>
                                    <option value='' selected>Région</option>
                                    <option value='Sud-Ouest'>Sud-Ouest</option>
                                    <option value='Ouest'>Ouest</option>
                                    <option value='Nord-Ouest'>Nord-Ouest</option>
                                    <option value='Nord'>Nord</option>
                                    <option value='Nord-Est'>Nord-Est</option>
                                    <option value='Est'>Est</option>
                                    <option value='Sud-Est'>Sud-Est</option>
                                    <option value='Sud'>Sud</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Image 1</Label>
                            <Col sm={10}>
                                <Input type="text" name="image1" placeholder="Image" value={this.state.image1} onChange={this.onChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Image 2</Label>
                            <Col sm={10}>
                                <Input type="text" name="image2" placeholder="Image" value={this.state.image2} onChange={this.onChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Image 3</Label>
                            <Col sm={10}>
                                <Input type="text" name="image3" placeholder="Image" value={this.state.image3} onChange={this.onChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Prix en euros</Label>
                            <Col sm={10}>
                                <Input type="number" name="prix" step="1" placeholder="145" value={this.state.prix} onChange={this.onChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row className='mt-3 mb-0'>
                            <Col sm={{ size: 'auto', offset: 4 }}>
                                <Link to="/latipik/admin">
                                    <Button color="info">
                                        Retour
                                    </Button>
                                </Link>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Button onClick={() => this.submitForm()} color="success">Validation</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        );
    }
}


export default Ajout;