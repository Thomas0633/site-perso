import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './about.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const About = () => {
    return (
        <div className='pt-5 aboutCv' id='idAaboutCv'>
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
                  <p className='pAboutCv'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.<br />
                  Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim.</p>
                </Bounce>
              </Col>
            </Row>
          </Container>
        </div>
    );
}

export default About;