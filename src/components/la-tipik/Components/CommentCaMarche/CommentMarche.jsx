import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Animated } from "react-animated-css";
import Tabs from './Tabs';

import "./CommentMarche.css";


class CommentMarche extends Component {
  render() {
    return (
      <div className="pt-4 logosCommentMarche fondHow ">

        <Container>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} className="text-center mt-5 mb-5">
              <Animated animationIn="fadeInLeftBig" >
                <div>
                  <h1 className="titreHow text-center pb-5 pt-5" >Comment ça marche ?</h1>
                </div>
              </Animated>

            </Col>
          </Row>
        </Container>

        <Container fluid >
          <Row style={{ backgroundColor: '#3F8E92', borderColor: '#3F8E92', color: '#FFFFFF' }}>
            <Col sm={{ size: 10, offset: 1 }} className="text-center mt-5 mb-5">
              <h3 className="">Effectuez une recherche, réservez en toute sécurité, partez explorer la Tipik!!.</h3>
            </Col>
          </Row>

          <Row style={{ backgroundColor: '#3F8E92', borderColor: '#3F8E92', color: '#FFFFFF' }}>
            <Col sm={{ size: 2, offset: 2 }} className="text-center pl-3 mt-5 mb-5">
              <i className="fas fa-search"></i>
              <p>Effectuez une recherche</p>
            </Col>
            <Col sm={{ size: 2, offset: 1 }} className="text-center mt-5 mb-5">
              <i className="fas fa-envelope-open-text"></i>
              <p>Réserver en toute sécurité!</p>
            </Col>
            <Col sm={{ size: 2, offset: 1 }} className="text-center pr-3 mt-5 mb-5">
              <i className="fas fa-suitcase"></i>
              <p>Partez explorer l'atypique!!</p>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 4, offset: 2 }} className="text-center mt-5 mb-3">
            <h3 className="titreSectionColor">Recherchez ...</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={{ size: 9, offset: 3 }} className="mt-3 mb-5 ml-4 d-flex justify-content">
              <p className="fontHowTitle2">1/ Utilisez les filtres de la barre de recherche du site pour trier votre séléction par :</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Tabs />
        </Container>

        <Container>
          <Row>
            <Col sm={{ size: 9, offset: 3 }} className="mt-4 mb-5 ml-4 d-flex justify-content">
              <p className="fontHowTitle2">2/ Sélectionnez les dates souhaitées pour obtenir les disponibilités et prix exacts:</p>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 5, offset: 5 }} className="mt-1 mb-5 justify-content-center">
              <Animated animationIn="zoomInDown" >
                <div>
                  <img width="50%" src="https://bonnieglenpavilion.com/wp-content/uploads/2018/03/Save-the-Date-958x435.png" alt="logo" />
                </div>
              </Animated>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row style={{ backgroundColor: '#3F8E92', borderColor: '#3F8E92', color: '#FFFFFF' }} >
            <Col sm={{ size: 4, offset: 2 }} className="text-center mt-4 mb-3 fondColorReserve">
              <h3 className="titreSectionBlanc">Réservez ...</h3>
            </Col>
          </Row>

          <Row style={{ backgroundColor: '#3F8E92', borderColor: '#3F8E92'}} >
            <Col sm={{ size: 9, offset: 2 }} className="mt-2 mb-4">
              <p className="fontHowTextReserve" >Une fois la location de vacances trouvée, vous pouvez réserver votre séjour et finaliser votre paiement sur <span className="keyWord" >La TipiK®</span>.</p>
            </Col>
          </Row>

          <Row  style={{backgroundColor: '#3F8E92', borderColor: '#3F8E92'}} >
            <Col sm={{ size: 9, offset: 2 }} className="mt-2 mb-4">
              <ul >
                <li className="fontHowTextReserve">La plupart de nos propriétés peuvent être réservées et payées directement en ligne.</li><br />
                <li className="fontHowTextReserve">Cliquez sur le bouton <span className="keyWord">"Je Réserve"</span>, renseignez les champs demandés puis finalisez votre réservation.</li><br />
                <li className="fontHowTextReserve">Vous recevrez un email dans un délai de 24 heures maximum vous informant si votre demande est acceptée ou <br /> refusée.</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 4, offset: 2 }} className="text-center mt-5 mb-3">
              <h3 className= "titreSectionColor">Voyagez !!!</h3>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 9, offset: 2 }} className="mt-2 mb-5 ">
              <ul >
                <li className="fontHowText">Une fois votre séjour réservé, nous souhaitons que votre arrivée et votre départ soient le plus simple possible <br /> et que vous puissiez profiter pleinement de vos vacances.</li> <br />
                <li className="fontHowText">
                  Après votre séjour, vous pourrez partager votre expérience avec d'autres vacanciers en laissant un commentaire.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <div className="light colonne">
              <Col sm={{ size: 8, offset: 2 }} className=" d-flex justify-content-center mt-1 mb-4">
                <img className='alleZenImage img-thumbnail' src="/ressources/la-tipik/image/AlleeZen.jpg" alt="picture" width="90%" />
              </Col>
            </div>
          </Row>
        </Container >

      </div >
    )
  }
}

export default CommentMarche;