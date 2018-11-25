import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './about.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div className='pt-5 pb-5 aboutCv' id='idAaboutCv'>
          <Container>
            <h1 className='display-4 titleCategorieCv mb-5 mt-3'><i className="fas fa-info-circle pr-3 iconTitleCv"></i>A propos</h1>

            <Row>
              <Col lg='3' className='d-flex align-items-center'>
                <Fade left>
                  <img src="ressources\cv\IMG_5851.jpg" className='img-fluid' alt='Photo de profil' />
                </Fade>
              </Col>
              <Col lg='9' className='text-justify pl-5'>
                <Bounce right>
                  <p className='pAboutCv'>Passionné d'informatique, j'ai commencé par monter et bricoler des ordinateurs avant de découvrir l'univers du code. Après une forte expérience dans la Gendarmerie Nationale, j'ai choisis de me reconvertir et de faire de ma passion, mon métier.
                  <br />
                  Après avoir obtenu mon baccalauréat STMG spécialité ressources humaines, je me suis engagé en tant que gendarme adjoint volontaire. Durant 4 années dans ce poste, j'ai pu découvrir le travail au sein d'une très grande institution publique. Force de caractère, j'ai su m'imposer et accroître mon leadership en étant nommé au grade de Brigadier-Chef. La rigueur et la discipline font partie intégrante de mes valeurs.
                  <br />
                  Après cette forte expérience passée dans ce corps d'armée, je me suis réorienté dans le développement web. Je suis, à présent, en formation à la Wild Code School de Bordeaux afin d'exercer ma passion au quotidien.
                  <br />
                  Grâce à cette formation, j'ai pu développer mes compétences principalement en JavaScript, ReactJS, NodeJS, ce qui me permet aujourd'hui d'être full-stack. Cet apprentissage m'a également appris à apprendre. En effet, la technique d'enseignement appliquée est une pédagogie inversée qui m'a appris à chercher par moi-même lorsque je suis face à un problème. J'ai pu réaliser différents projets, mettant en application toutes les technologies découvertes, ce qui m'a apporter de l'expérience et une grande confiance en mes compétences en développement web.</p>
                </Bounce>
              </Col>
              <Zoom>
                <p className='text-justify pAboutCv'>
                  Durant toute cette formation, j'ai pu travailler en agile, notamment en Scrum. J'ai pu aussi obtenir les certificats de réussite OpenClassroom pour le HTML5, CSS3 et JavaScript.
                  <br />
                  Je suis sans cesse à la recherche de nouvelles compétences comme de nouveaux langages. La veille technologique est primordiale pour moi, afin de rester à jour de toutes les nouveautés du web.
                  <br />
                  Je suis à la recherche d'un stage ou d'une opportunité d'emplois à partir du 01 février 2019. N'hésitez pas à me contacter par mail thomasbulle@hotmail.fr ou sur mon linkedin.
                </p>
              </Zoom>
            </Row>
          </Container>
        </div>
    );
}

export default About;