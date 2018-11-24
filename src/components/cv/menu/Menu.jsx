import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className='pt-2 pb-2 navMenuCv'>
                <Navbar light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="justify-content-center" isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem className='ml-4 mr-4 itemNavCv'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNavCv' href="#idAaboutCv">A propos</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 itemNavCv'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNavCv' href="#idCompetencesCv">Compétences</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 itemNavCv'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNavCv' href="#idFormationsCv">Formations</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 itemNavCv'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNavCv' href="#idExperiencesCv">Expériences</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 itemNavCv'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNavCv' href="#idProjetsCv">Projets</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 itemNavCv'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNavCv' href="#idContactCv">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;