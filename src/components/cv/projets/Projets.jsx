import React, { Component } from 'react';
import { Container, Row, Badge, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import './projets.css';
import CardProjets from './CardProjets';

class Projets extends Component {
    render() {
        return(
            <div className='mt-5 p-5' id='idProjetsCv'>
                <Container fluid>
                    <h1 className='display-4 text-white titleCategorieCv mb-5'><i className="fas fa-wrench pr-3 iconTitleCv"></i>Projets</h1>

                    <Zoom>
                        <Row>
                          <CardProjets
                            image='ressources/cv/projet1-react.png'
                            title='Multi-App in React'
                            description="Développement d'une application web à titre personnel mettant en oeuvre plusieurs principes de programmation sur différentes petites applications."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadgeCv'>
                                <Badge className='mr-3 badgeCardCv'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCardCv'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCardCv'>Bootstrap</Badge>
                                <Badge className='mr-3 badgeCardCv'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCardCv'>ReactJS</Badge>
                              </div>
                            }
                            link={
                              <Link to="/multi-app/">
                                <Button className='btnCardProjetCv'>Découvrir <i className="fas fa-angle-right"></i></Button>
                              </Link>
                            }
                          />

                          <CardProjets
                            image='ressources/cv/la-tipik.png'
                            title='La Tipik'
                            description="Développement d'un site web pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs sur une durée de 5 semaines. Travail en agile (Scrum)."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadgeCv'>
                                <Badge className='mr-3 badgeCardCv'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCardCv'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCardCv'>Bootstrap</Badge>
                                <Badge className='mr-3 badgeCardCv'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCardCv'>ReactJS</Badge>
                              </div>
                            }
                            link={
                              <Link to="/latipik">
                                <Button className='btnCardProjetCv'>Découvrir <i className="fas fa-angle-right"></i></Button>
                              </Link>
                            }
                          />

                          <CardProjets
                            image='ressources/cv/cerf-tete.png'
                            title='Wild Cerf-tête'
                            description="Développement d'un site web vitrine pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs sur une durée d'un mois. Travail en agile (Scrum)."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadgeCv'>
                                <Badge className='mr-3 badgeCardCv'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCardCv'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCardCv'>Bootstrap</Badge>
                              </div>
                            }
                            link={<a href='http://www.campus-bordeaux.ovh/woodhead/' target='_blank'><Button className='btnCardProjetCv'>Découvrir <i className="fas fa-angle-right"></i></Button></a>}
                          />

                          <CardProjets
                            image='ressources/cv/wild-circus.jpg'
                            title='Wild Circus'
                            description="Création d'un site fictif destiné à une troupe de cirque. Projet effectué dans le cadre de la candidature à la Wild Code School."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadgeCv'>
                                <Badge className='mr-3 badgeCardCv'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCardCv'>CSS 3</Badge>
                              </div>
                            }
                            link={<Button className='btnCardProjetCv'>Découvrir <i className="fas fa-angle-right"></i></Button>}
                          />

                          <CardProjets
                            image='ressources/cv/simpson-quotes.jpg'
                            title='Chocolate box'
                            description='Composez votre boîte de chocolat ! Une petit application développée en React / Redux.'
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadgeCv'>
                                <Badge className='mr-3 badgeCardCv'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCardCv'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCardCv'>Bootstrap</Badge>
                                <Badge className='mr-3 badgeCardCv'>ReactStrap</Badge>
                                <Badge className='mr-3 badgeCardCv'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCardCv'>ReactJS</Badge>
                                <Badge className='mr-3 badgeCardCv'>Redux</Badge>
                              </div>
                            }
                            link={
                              <Link to="/simpson-quote">
                                <Button className='btnCardProjetCv'>Découvrir <i className="fas fa-angle-right"></i></Button>
                              </Link>
                            }
                          />

                          <CardProjets
                            image='ressources/cv/react-fetch.jpg'
                            title='Random fetch'
                            description="Une petite application qui utilise une API et génère aléatoirement des employés ou des citations des Simpsons."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadgeCv'>
                                <Badge className='mr-3 badgeCardCv'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCardCv'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCardCv'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCardCv'>ReactJS</Badge>
                              </div>
                            }
                            link={
                              <Link to="/simpson-fetch">
                                <Button className='btnCardProjetCv'>Découvrir <i className="fas fa-angle-right"></i></Button>
                              </Link>
                            }
                          />

                          <CardProjets
                            image='ressources/cv/simpson-quotes.jpg'
                            title='Simpson Quotes'
                            description="Petite application pour mettre en pratique React. Appuyez sur les interrupteurs pour allumer ou éteindre les lampes."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadgeCv'>
                                <Badge className='mr-3 badgeCardCv'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCardCv'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCardCv'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCardCv'>ReactJS</Badge>
                              </div>
                            }
                            link={
                              <Link to="/simpson-quote">
                                <Button className='btnCardProjetCv'>Découvrir <i className="fas fa-angle-right"></i></Button>
                              </Link>
                            }
                          />
                        </Row>
                    </Zoom>
                </Container>
            </div>
        )
    }
}

export default Projets;