import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './projets.css';

const CardProjets = (props) => {
  return(
    <Col xs='12' md='6' lg='4' className='mb-5'>
      <Card className='cardContainerCv'>
        <div className='pb-1 text-right divBarreWindowsCv'>
          <span className='pl-2 pr-2'><i className="fas fa-minus"></i></span>
          <span className='pl-2 pr-2'><i className="far fa-clone iconReduceCardCv"></i></span>
          <span className='pl-2 pr-2'><i className="fas fa-times"></i></span>
        </div>
        <div className='divImageCardCv'>
          {props.techno}
          <CardImg top width="100%" src={props.image} alt={props.title} className='imageCardCv' />
        </div>
        <CardBody className='d-flex flex-column justify-content-between'>
          <CardTitle>{props.title}</CardTitle>
          <CardText>
            {props.description}
          </CardText>
          <div className='w-100 float-bottom'>
            {props.link}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CardProjets;