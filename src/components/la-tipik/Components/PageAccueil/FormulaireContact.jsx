import React from 'react';
import { Button } from 'reactstrap';
import EntreeForm from './EntreeForm';
import './FormulaireContact.css';
import { Container, Row, Col } from 'reactstrap';


export default class FormulaireContact extends React.Component {
  render() {
    return (
        <div className="FormulaireContact">
            <Container>
                <h1 className='titleContact mb-5 pb-3'>Nous contacter</h1>
                <Row>
                    <Col md="6" className="mb-5">
                        <EntreeForm
                            label="Nom"
                            placeholder="Enter your name"
                            type="text"
                            classStyle="nom"
                        />
                        <EntreeForm 
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            classStyle="email"
                        />

                        <EntreeForm 
                            label="Message"
                            placeholder=""
                            type="textarea"
                            classStyle="message"
                            
                        />

                        <Button outline color="secondary">Submit</Button>
                    </Col>
                    <Col md="6">
                        <h5>NOS COORDONNEES:</h5>
                        <br/>
                        <p>68, cours de Verdun</p>
                        <p>33000 BORDEAUX</p>
                        <p>Tel : +33 6 12 34 56 78</p>
                        <img src="/ressources/la-tipik/image/CoursVerdun.png" alt="location" className="CoursVerdun"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}