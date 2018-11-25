import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './formaExp.css';
import Modele from './Modele';


class FormaExp extends Component {
    render() {
        return(
          <div className='formationsCv'>
            <div className='mt-5 pt-5 pb-5' id='idFormationsCv'>
                <Container fluid className='containerFormationsCv'>
                    <h1 className='display-4 titleCategorieCv mb-5'><i className="fas fa-graduation-cap pr-3 iconTitleCv"></i>Formations</h1>
                    
                    <Modele
                      name='Wild Code School'
                      location='Bordeaux, Gironde'
                      diplome='Formation développeur web - Full stack'
                      dateDebut='SEPTEMBRE 2018'
                      dateFin='FEVRIER 2019'
                      description="Formation d'une durée de 5 mois dans laquelle j'ai pu me former au métier de développeur web. J'ai pu découvrir différentes technologies front-end mais également back-end, ce qui m'a permis de devenir full-stack. Durant toute cette formation, j'ai appliqué la méthode agile, plus précisément en Scrum. Cela m'a permis d'accroître mon sens du travaille en équipe."
                    />

                    <Modele
                      name='Lycée Grand Air'
                      location='Arcachon, Gironde'
                      diplome='Baccalauréat STMG'
                      dateDebut='JUIN 2014'
                      dateFin='SEPTEMBRE 2011'
                      description="Baccalauréat Sciences et Technologies du Management et de la Gestion, spécialité Ressources Humaines obtenue en juin 2014 au lycée Grand Air à Arcachon (33)."
                    />

                </Container>
            </div>

            <div className='pt-5 pb-5 experiencesCv' id='idExperiencesCv'>
              <Container fluid className='containerFormationsCv'>
                <h1 className='display-4 titleCategorieCv mb-5'><i className="fas fa-suitcase pr-3 iconTitleCv"></i>Expériences</h1>

                <Modele
                  name='Gendarmerie Nationale'
                  location='France'
                  diplome='Gendarme Adjoint Volontaire - Brigadier-Chef'
                  dateDebut='SEPTEMBRE 2014'
                  dateFin='SEPTEMBRE 2018'
                  description="Poste de gendarme adjoint volontaire en brigade territoriale, occupé durant 4 années. Cette forte expérience m'a permis de découvrir les valeurs militaires comme le respect de la hiérarchie, la ponctualité et la disponibilité. De nombreuses responsabilités m'ont été confiée, pour cela, j'ai du acquérir une grande maturité. J'ai également travaillé en équipe au quotidien et développé mon leadership grâce à mon grade de Brigdier-Chef."
                />
              </Container>
            </div>
          </div>
        )
    }
}

export default FormaExp;