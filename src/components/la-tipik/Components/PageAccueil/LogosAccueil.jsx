import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './logosAccueil.css';

class LogosAccueil extends Component {
    render() {
        return(
            <div className="pt-4 logosAccueil ">
                <Container fluid className='containerLogosAccueil'>
                    <Row>
                        <Col sm={{ size: 2, offset: 1 }} className="text-center">
                            <i className="fas fa-search"></i><br />
                            <p>Plus de 100 000 expériences disponibles</p>
                        </Col>
                        <Col sm={{ size: 2, offset: 2 }} className="text-center">
                            <i className="fas fa-globe-americas"></i>
                            <p>Dans plus de 2 550 villes de France</p>
                        </Col>
                        <Col sm={{ size: 2, offset: 2 }} className="text-center">
                            <i className="fab fa-fort-awesome-alt"></i>
                            <p>Des hébergements les plus atypiques et originaux</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LogosAccueil;