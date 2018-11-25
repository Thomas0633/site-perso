import React, { Component } from 'react';
import './chocolateApp.css';
import ChocolateList from './components/ChocolateList';
import ChocolateBox from './containers/ChocolateBox';

class ChocolateApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hauteur: 0,
    }
  }

  componentDidMount() {
    let hauteur = window.innerHeight;
    this.setState({
        hauteur: hauteur,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div style={{ minHeight: this.state.hauteur }} className="ChocolateApp">
        <ChocolateList />
        <ChocolateBox />
      </div>
    );
  }
}

export default ChocolateApp;