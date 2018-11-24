import React from 'react';
import { Link } from "react-router-dom";
import { Col, Card, CardImg, Button, CardBody, CardTitle, CardText } from 'reactstrap';
import './CardsCatalogue.css';

const CardCatalogue = (props) => {
    return (
        <Col xs='12' md='6' lg='4'>
            <Card className="bodyCardCatalogue">
                <CardImg top width="100%" src={props.card.image1} alt="Card image cap" className="sizeImgCatalogue" />
                <CardBody>
                    <CardTitle className='text-center'>{props.card.titre}</CardTitle>
                    <CardText className='pt-0'>
                        <ul className='ulCard text-center pl-0'>
                            <li>{props.card.localisation}, {props.card.theme}</li>
                            <li>{props.card.prix} € / nuit</li>
                        </ul>
                    </CardText>
                    <div className='d-flex justify-content-center'>
                    <Link to={{ pathname: '/latipik/annonce', 
                        state: {
                            titre: props.card.titre,
                            theme: props.card.theme,
                            description: props.card.description,
                            type_logement: props.card.type_logement,
                            equipement: props.card.equipement,
                            localisation: props.card.localisation,
                            image1: props.card.image1,
                            image2: props.card.image2,
                            image3: props.card.image3,
                            prix: props.card.prix,
                    }}}>
                            <Button size="sm" outline color="success" className='buttonCard'>Découvrir</Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CardCatalogue;