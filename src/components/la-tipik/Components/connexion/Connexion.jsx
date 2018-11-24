import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Connexion.css'
import { Link } from "react-router-dom";



class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            hauteur: 0,
        }
        this.addName = this.addName.bind(this);
        this.addPassword = this.addPassword.bind(this);
    }

    componentDidMount() {
        let hauteur = window.innerHeight - 190;
        this.setState({
            hauteur: hauteur,
        }, () => console.log(this.state));
    }

    addName(event) {
        this.setState({
            name: event.target.value,
        })
    }

    addPassword(event) {
        this.setState({
            password: event.target.value,
        })
    }


    render() {
        let bouton = (this.state.name === "admin" && this.state.password === "admin") ? <Link to='/latipik/admin'><Button color="success">Validation</Button></Link> : "";

        return (
            <div className='Connexion pt-5' style={{ minHeight: this.state.hauteur }}>
                <Container className='pt-5'>
                    <h1 className="titre pt-5 pb-5">Connexion</h1>
                    <Row>
                        <Col xs={{ size: '6', offset: '3'}}>
                            <Form onSubmit={this.props.submit}>
                                <div className="input_bloc">
                                    <FormGroup>
                                        <Label for="exampleEmail" hidden>Nom</Label>
                                        <Input
                                            className="input"
                                            type="text"
                                            name="email"
                                            onChange={this.addName}
                                            value={this.state.name}
                                            placeholder="Nom" />
                                    </FormGroup>
                                </div>
                                <div className="input_bloc">
                                    <FormGroup>
                                        <Label for="examplePassword" hidden>Mot de passe</Label>
                                        <Input
                                            className="input"
                                            type="password"
                                            onChange={this.addPassword}
                                            value={this.state.password}
                                            name="password"
                                            placeholder="Mot de passe" />
                                    </FormGroup>
                                </div>
                                <Row>
                                    <Col xs='6'>
                                        <span>Mot de passe oublié ?</span>
                                    </Col>
                                    <Col xs='6'>
                                        {bouton}
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Connexion;