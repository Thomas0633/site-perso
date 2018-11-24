import React from 'react';
import { Row, Col } from 'reactstrap';
import './formaExp.css';
import Fade from 'react-reveal/Fade';


const Modele = (props) => {
  return(
    <Row className='mb-5 rowFormationsCv'>
      <Col md='4' className='p-0'>
        <Fade left>
          <div className='mr-2 h-100 d-flex flex-column justify-content-center align-items-center txtFormationsCv'>
            <div className='display-4 pl-2 pr-2 schoolFormationsCv'>
              {props.name}
            </div>
            <div className='pl-2 pr-2 locationSchoolFormationCv'>
              <i className="fas fa-map-marker-alt"></i> {props.location}
            </div>
            <div className='pt-4 pl-2 pr-2 d-flex align-items-center justify-content-center diplomeFormationsCv'>
              {props.diplome}
            </div>
          </div>
        </Fade>
      </Col>

      <Col md='2' className='p-0 d-flex justify-content-center align-items-center dateFormationsCv'>
        <div className='pointDateLeftCv'></div>
          {props.dateDebut} -<br />{props.dateFin}
        <div className='pointDateRightCv'></div>
      </Col>

      <Col md='6' className='p-0'>
        <Fade right>
          <div className='ml-2 h-100 text-justify d-flex align-items-center txtFormationsCv'>
            <div className='p-3'>
              {props.description}
            </div>
          </div>
          </Fade>
      </Col>
    </Row>
  )
}

export default Modele;