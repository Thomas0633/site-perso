import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './contact.css';

class FollowContact extends Component {
    render() {
        return(
            <Container fluid className='followContactCv'>
              <Row>
                <Col xs='12' md='6'>
                  <h3 className='font-weight-light'>Contactez-moi !</h3>
                  <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                      <h4 className='font-weight-light pb-5'>Thomas Bulle</h4>
                      <h4 className='font-weight-light'><i className="fas fa-envelope"></i> thomasbulle@hotmail.fr</h4>
                  </div>
                </Col>

                <Col xs='12' md='6'>
                  <h3 className='font-weight-light'>Suivez-moi !</h3>
                  <div className='h-100 d-flex justify-content-center align-items-center'>
                    <a href='#' target='_blank' className='text-white'><i className="fab fa-twitter pl-4 pr-4 logoSocialCv"></i></a>
                    <a href='https://www.linkedin.com/in/thomas-bulle/' target='_blank' className='text-white'><i className="fab fa-linkedin pl-4 pr-4 logoSocialCv"></i></a>
                    <a href='https://github.com/Thomas0633' target='_blank' className='text-white'><i className="fab fa-github pl-4 pr-4 logoSocialCv"></i></a>
                  </div>
                </Col>
              </Row>
            </Container>
        )
    }
}

export default FollowContact;