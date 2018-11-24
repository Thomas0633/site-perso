import React from 'react';
import './cv.css';
import Header from './header/Header.jsx';
import Menu from './menu/Menu';
import About from './about/About';
import Competences from './competences/Competences';
import FormaExp from './formationsExp/FormaExp';
import Projets from './projets/Projets';
import Contact from './contact/Contact';

const Cv = () => {
  return (
    <div className='containerImgCv'>
      <div className='containerBlackAppCv'>
        <div className='arrowUpCv'>
          <a href='#header'><i className="fas fa-chevron-circle-up iconArrowUpCv"></i></a>
        </div>
        <Header />
        <Menu />
        <About />
        <Competences />
        <FormaExp />
        <Projets />
        <Contact />
      </div>
    </div>
  );
}

export default Cv;
