import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import * as moment from 'moment';


class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbVoyageur: 0,

        }
        this.changeNbVoyageur = this.changeNbVoyageur.bind(this);

    }

    componentDidMount() {
        this.setState({
            nbVoyageur: 1,

        })
    }


    changeNbVoyageur(event) {
        this.setState({
            nbVoyageur: event.target.value,
        })
    }

    render() {
        const date1 = moment(this.props.dateAller);
        const date2 = moment(this.props.dateRetour);
        let dateDiff = (date2.diff(date1) / 86400000);
        dateDiff = (dateDiff > 0) ? dateDiff : 0;

        let prixTotal = this.props.prix * dateDiff;
        let boutonSubmit = ""

        if (dateDiff <= 0) {
            dateDiff = 0;
            boutonSubmit = (<Button onClick={() => { }} color="secondary">Je réserve</Button>)
        } else {
            boutonSubmit = (<Button onClick={this.props.createNotification} color="success">Je réserve</Button>)
        }

        return (
            <Form onSubmit={this.props}>
                <FormGroup row>
                    <Label sm={2} for="exampleDate">Départ</Label>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <Input type="date" name="depart" value={this.props.dateAller} onChange={this.props.changeDateAller} placeholder="date placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for="exampleDate">Retour</Label>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <Input type="date" name="retour" value={this.props.dateRetour} onChange={this.props.changeDateRetour} placeholder="date placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for="exampleSelect">Voyageur(s)</Label>
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Input type="select" name="nbVoyageur" value={this.state.nbVoyageur} onChange={this.changeNbVoyageur} id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Input>
                    </Col>
                </FormGroup>
                <div className="centerTitle">
                    <p>
                        <span>Prix par nuit : </span>
                        <span>{this.props.prix} €</span>
                        <span> - </span>
                        <span>Prix total : </span>
                        <span>{Math.round(prixTotal)} €</span>
                    </p>

                    {boutonSubmit}
                </div>
            </Form>
        );
    }
}

export default Formulaire;