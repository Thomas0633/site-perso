import React, { Component } from 'react';
import Header from '../Header';

class CarouselCards extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Homer Simpson" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value.replace('*', '')
    });
  }

  render() {
    return (
      <div>
        <Header img={<i class="fas fa-clipboard-list"></i>} txt="Cards défilantes" />
        <h1>{this.state.name}</h1>
        <form>
          <label htmlFor="name">Name :</label>
          <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}


export default CarouselCards;