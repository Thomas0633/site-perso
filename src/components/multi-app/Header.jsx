import React, { Component } from 'react';
import './multiApp.css';

class Header extends Component {
    render() {
        return (
        <div className="containerComptApp d-flex align-items-center justify-content-center">
          <h1 className="mb-0 font-weight-normal text-white">{this.props.img} {this.props.txt}</h1>
        </div>
        )
    }
}

export default Header;