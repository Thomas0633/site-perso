import React, { Component } from 'react';
import { Col, Button, Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import './CardSelect.css';
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

class CardSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <Col xs='12' md='6' lg='4' className='pb-4'>
            <Card className="bodyCardCatalogue">
              <Zoom>
                  <CardImg top width="100%" src={this.props.objetAnnonce.image1} alt="Card image cap" className="sizeImgCatalogue" />
                  <CardBody>
                      <CardTitle className='text-center'>{this.props.objetAnnonce.titre}</CardTitle>
                      <CardText className='pt-0'>
                          <ul className='ulCard text-center pl-0'>
                              <li>{this.props.objetAnnonce.localisation}, {this.props.objetAnnonce.theme}</li>
                              <li>{this.props.objetAnnonce.prix} € / nuit</li>
                          </ul>
                      </CardText>
                      <div className='d-flex justify-content-center'>
                      <Link to={{ pathname: '/latipik/annonce', 
                          state: {
                              titre: this.props.objetAnnonce.titre,
                              theme: this.props.objetAnnonce.theme,
                              description: this.props.objetAnnonce.description,
                              type_logement: this.props.objetAnnonce.type_logement,
                              equipement: this.props.objetAnnonce.equipement,
                              localisation: this.props.objetAnnonce.localisation,
                              image1: this.props.objetAnnonce.image1,
                              image2: this.props.objetAnnonce.image2,
                              image3: this.props.objetAnnonce.image3,
                              prix: this.props.objetAnnonce.prix,
                      }}}>
                              <Button size="sm" color="success">Découvrir</Button>
                          </Link>
                      </div>
                  </CardBody>
                </Zoom>
            </Card>
        </Col>   
    );
  }
};

export default CardSelect;