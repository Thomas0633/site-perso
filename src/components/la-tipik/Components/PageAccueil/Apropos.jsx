import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Apropos.css";
import Rotate from 'react-reveal/Rotate'

const Apropos = (props) => {
  return (
    <div id="Apropos" className="full">
      <Container className="pt-5">
        <Row>
          <Col sm={{ size: 8, offset: 2 }} className="text-center mt-5">
            <Rotate cascade duration={1000}>
              <h1 className="titleAbout text-center w100 pb-3">A propos de La TipiK</h1>
            </Rotate>
          </Col>
          <Col sm={{ size: 8, offset: 2}} className="lead p-5 mt-5 mb-5">
            Partez à la découverte de nombreux hébergements insolites et réservez votre coup de coeur directement en ligne sur AtipiK. <br />
            Nous dénichons pour vous des endroits atypiques, Lov’Nid, igloos, tipis, dans des cadres enchanteurs au coeur de nos belles régions françaises.
L'AtipiK vous garantit un voyage unique et une expérience hors des sentiers battus !<br />
            Afin de vous offrir totale satisfaction, notre site a été pensé pour faciliter votre navigation sur smartphone, tablette ou ordinateur.
A moins de 2 heures de chez vous ou à l’autre bout de la France, vous êtes sûrs de trouver l’hébergement de vos rêves grâce à notre système de recherche intuitif et sa technologie de géolocalisation. <br />
            L’équipe de l'AtipiK, passionnée et dévouée, a pensé à tout pour que vous viviez des instants magiques et un séjour hors du commun.
            Choisissez votre thématique préférée et offrez-vous la magie d’une nuit insolite !
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Apropos;