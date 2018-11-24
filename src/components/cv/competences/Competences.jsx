import React, { Component } from 'react';
import './competences.css';

import { Container, Row, Col, Button } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import MoreCompetences from './MoreCompetences';

class Competences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

    render() {
        return (
            <div className='mt-5 pt-5 pb-5 competencesCv' id='idCompetencesCv'>
                <Container>
                    <h1 className='display-4 mb-5 text-white'><i className="fas fa-cogs pr-3 iconTitleCv"></i>Compétences</h1>

                    <Zoom>
                        <Row className='mb-5 pt-5'>
                            <Col lg='4' className='w-100 mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetencesCv'>
                                    <img src='ressources\cv\html.png' className='w-75 img-fluid' alt='HTML 5' />
                                    <span className='nameCompetenceCv mt-2 mb-2'>HTML 5</span>
                                </div>
                            </Col>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetencesCv'>
                                    <img src='ressources\cv\css.png' className='w-75 img-fluid' alt='CSS 3' />
                                    <span className='nameCompetenceCv mt-2 mb-2'>CSS 3</span>
                                </div>
                            </Col>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetencesCv'>
                                    <img src='ressources\cv\js.png' className='w-75 img-fluid' alt='JavaScript' />
                                    <span className='nameCompetenceCv mt-2 mb-2'>JavaScript</span>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row className='mb-5 pt-5'>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetencesCv'>
                                    <img src='ressources\cv\react.png' className='w-75 img-fluid' alt='React JS' />
                                    <span className='nameCompetenceCv mt-2 mb-2'>React JS</span>
                                </div>
                            </Col>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetencesCv'>
                                    <img src='ressources\cv\node.png' className='w-75 img-fluid' alt='Node JS' />
                                    <span className='nameCompetenceCv mt-2 mb-2'>Node JS</span>
                                </div>
                            </Col>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetencesCv'>
                                    <img src='ressources\cv\bootstrap.png' className='w-75 img-fluid' alt='Bootstrap' />
                                    <span className='nameCompetenceCv mt-2 mb-2'>Bootstrap</span>
                                </div>
                            </Col>
                        </Row>
                    </Zoom>

                    <Button size='lg' className='mb-5 buttonCompetencesCv' onClick={this.handleClick}>En savoir plus</Button>

                    <Fade top collapse when={this.state.show}>
                      <MoreCompetences />
                    </Fade>
                </Container>
            </div>
        )
    }
}

export default Competences;