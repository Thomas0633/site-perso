import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
  import "./NavBar.css";


export default class Example extends React.Component {
  
  render() {
    return (
   
      <div className=" w-100 navTransparent">
        <Navbar className="navbar navbar-default " light expand="md">
          <NavbarBrand><Link to="/latipik/"><img className='img-fluid colorTrans responsiveLogo' src="/ressources/la-tipik/image/Logo-La tipik.png" alt="Responsive image" /></Link></NavbarBrand>

            <Nav className="flex-row-reverse fixed-top" navbar>      
              <NavItem>
                <NavLink exactto="/latipik/connexion">
                <Link className="colorLink responsiveNav" to="/latipik/connexion/">Mon compte</Link>
                </NavLink>
              </NavItem>

              <NavItem>
              <NavLink exactto="/latipik/comment">
              <Link className="colorLink responsiveNav" to="/latipik/comment/"> Aide</Link>
              </NavLink>
              </NavItem>

              <NavItem>
                <NavLink exactto="/latipik/">
                <Link className="colorLink responsiveNav" to="/latipik/">Accueil</Link></NavLink>
              </NavItem>
            </Nav>     
        </Navbar>

      </div>
     
    );
  }
}

