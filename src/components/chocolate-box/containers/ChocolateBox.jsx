import React, { Component } from 'react';

import { connect } from 'react-redux';

import './chocolateBox.css';

class ChocolateBox extends Component {
  render() {
    return (
      <div className='chocolateBox'>
        <h1 className='text-left titleChocolateBox'>ChocolateBox</h1>
        <div className='containerEmplacementChocolat'>
          {Array.from({length: 12}).map((item, index) => (
            <div className={this.props.box[index] ? 'emplacementChocolat ' + this.props.box[index] : 'emplacementChocolat'} key={index}></div>
          ))}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  box: state.box,
});

export default connect(mstp)(ChocolateBox);