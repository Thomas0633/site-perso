// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./simpsonQuote.css";

import Lamp from "./Lamp";

class SimpsonQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
      classImg: "Simpson-logo"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      on: !this.state.on,
      classImg: !this.state.classImg
    });
  }

  render() {
    const logoReact = this.state.on ? 'on' : 'off';
    const classImg = this.state.classImg ? 'Simpson-logo' : 'Simpson-logo onImg';
    return (
      <div className="Simpson">
        <header className="Simpson-header">
          <img src={logo} className={classImg} alt="logo" />
          <h1 className="Simpson-title">Simpsons Quotes</h1>
        </header>

        <button onClick={this.handleClick}>
          {logoReact}
        </button>

        <Lamp on />
        <Lamp />
      </div>
    );
  }
}

export default SimpsonQuote;