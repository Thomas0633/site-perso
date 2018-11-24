import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import arrayCompetences from '../../../arrayCompetences.json';

import './moreCompetences.css';

class MoreCompetences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayCompetences: arrayCompetences,
    }
  }

  render() {
    return(
      <div>
        <div className='mt-5 mb-5 p-5 containerMoreCompetencesCv'>
          <h2 className='display-4'>Front-end</h2>
          <Row className='mt-3 mb-3'>
            {this.state.arrayCompetences.map(item => {
              if(item.cat === 'front') {
                return(
                  <Col md='4' className='mt-5 d-flex justify-content-left align-items-center'>
                    <div className='w-25 h-100 mr-4 p-2 d-flex align-items-center imgCompetencesCv'>
                      <img src={item.image} className='img-fluid' alt={item.txt} />
                    </div>
                    <h4 className='font-weight-light'>{item.txt}</h4>
                  </Col>
                );
              }
            })}
          </Row>
        </div>

        <div className='mt-5 mb-5 p-5 containerMoreCompetencesCv'>
          <h2 className='display-4'>Back-end</h2>
          <Row className='mt-3 mb-3'>
            {this.state.arrayCompetences.map(item => {
              if(item.cat === 'back') {
                return(
                  <Col md='4' className='mt-5 d-flex justify-content-left align-items-center'>
                    <div className='w-25 h-100 mr-4 p-2 d-flex align-items-center imgCompetencesCv'>
                      <img src={item.image} className='img-fluid' alt={item.txt} />
                    </div>
                    <h4 className='font-weight-light'>{item.txt}</h4>
                  </Col>
                );
              }
            })}
          </Row>
        </div>

        <div className='mt-5 mb-5 p-5 containerMoreCompetencesCv'>
          <h2 className='display-4'>Autres</h2>
          <Row className='mt-3 mb-3'>
            {this.state.arrayCompetences.map(item => {
              if(item.cat === 'autre') {
                return(
                  <Col md='4' className='mt-5 d-flex justify-content-left align-items-center'>
                    <div className='w-25 h-100 mr-4 p-2 d-flex align-items-center imgCompetencesCv'>
                      <img src={item.image} className='img-fluid' alt={item.txt} />
                    </div>
                    <h4 className='font-weight-light'>{item.txt}</h4>
                  </Col>
                );
              }
            })}
          </Row>
        </div>
      </div>
    )
  }
}

export default MoreCompetences;