import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';

import './Avis.css'


const Avis = (props) => {
    return (
        <div className="Avis">
            <Container>
                <Row className="text_avis">
                    <Col xs="11">
                        <Media>
                            <div left href="#">
                                <img className="image_avis" width="100px" src={props.image} alt="Generic placeholder image" />
                            </div>
                            <Media body>
                                <Media heading>
                                    {props.name}
                                </Media>
                                {props.comment}
                            </Media>
                        </Media>
                    </Col>
                    <Col className="note_avis" xs="1">
                        {props.note}/5
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Avis;