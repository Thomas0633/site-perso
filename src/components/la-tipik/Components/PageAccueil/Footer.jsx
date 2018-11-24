import React, { Component } from "react";
import './Footer.css';
import { Col, Container, Row, Nav, NavItem,NavLink } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

class FooterPage extends Component {
    Newsletter() {
        prompt("Abonnez-vous à notre newsletter!", "Please, enter valid email." );
        
    }

    Partenaire() {
        prompt("Devenez partenaire!", "Please, enter valid email." );
        
    }

    render() {
      return (
            <div className=" footer page-footer pt-4">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="2">
                        <Link to="/latipik/"><img src="/ressources/la-tipik/image/LogoLaTipik.png"  className="LogoLaTipik" alt="logo"/></Link>
                    </Col>
                    <hr className="clearfix w-100 d-md-none" />
                    <Col md="2">
                        
                        <ul className="list-unstyled">
                        <li>
                            <Link className="rubriques" to="/latipik/apropos/">A propos</Link>
                        </li>
                        <li>
                            <Link className="rubriques" to="/latipik/Comment/">Aide</Link>
                        </li>
                        <li>
                            <Link className="rubriques" to="/latipik/formulaireContact/">Contact</Link>
                        </li>
                        </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none" />
                    <Col md="2">
                        
                        <ul className="list-unstyled">
                        <li>
                            <Button onClick={this.Partenaire} color="link" className="button" >Devenir partenaire</Button>
                        </li>
                        <li>
                            <Link className="rubriques" to="/latipik/catalogue">Réserver en ligne</Link>
                        </li>
                        <li>
                            <Button onClick={this.Newsletter} color="link" className="button">Newsletter</Button>
                        </li>
                        </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none" />
                    <Col md="2">
                        <ul className="list-unstyled">
                        <li>
                            <a className="rubriques" href="/footer/MentionsLegales.html">Mentions légales</a>
                        </li>
                        <li>
                            <a className="rubriques" href="/footer/PolitiqueDeConfidentialité.html">Politique de confidentialité</a>
                        </li>
                        <li>
                            <a className="rubriques" href="/footer/ConditionsGenerales.html">Conditions générales</a>
                        </li>
                        </ul>
                    </Col>

                    <hr className="clearfix w-100 d-md-none" />
                    <Col md="4" className="d-flex justify-content-center">
                        <Nav>
                        <NavItem>
                            <NavLink href="https://facebook.com" className="btn-floating btn-sm btn-fb mx-1">
                            <img src="/ressources/la-tipik/image/Facebook.png" className="Facebook" alt="fb"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.instagram.com" className="btn-floating btn-sm btn-tw mx-1">
                            <img src="/ressources/la-tipik/image/Instagram.png" className="Instagram" alt="Insta"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://twitter.com" className="btn-floating btn-sm btn-li mx-1">
                            <img src="/ressources/la-tipik/image/Twitter.png" className="Twitter" alt="Tw"/>
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://pbs.twimg.com/media/CV5UzgHW4AAx6xC.jpg"> Cre@te.com </a>
                </Container>
            </div>
        </div>
      );
    }
  }
  
  export default FooterPage;