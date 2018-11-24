import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hauteur: 0,
        }
    }

    componentDidMount() {
        let hauteur = window.innerHeight - 79;
        this.setState({
            hauteur: hauteur,
        }, () => console.log(this.state));
    }

    render() {
        return(
            <header style={{ minHeight: this.state.hauteur }} className='d-flex justify-content-center align-items-center headerCv' id='headerCv'>
                <h1 className='pt-5 pb-5'>
                    <span className='display-2 border-bottom border-white headNameCv'>Thomas BULLE</span>
                    <span className='display-2 mt-2 pl-3 pr-3 headJobCv'>Developpeur web Junior</span>
                </h1>
            </header>
        );
    }
}

export default Header;