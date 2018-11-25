import React from 'react';
import { Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addChocolate } from '../actions';

import './chocolate.css';

const Chocolate = (props) => {
  return (
    <div className='containerChocolatAdd'>
      <h5>{props.name}</h5>
      <Button color="success" size="sm" className='buttonAdd' onClick={() => {
        props.addChocolate(props.name);
      }}>+</Button>
    </div>
  );
}

const mdtp = dispatch => { // Permet d'accéder à l'action
  return bindActionCreators({
    addChocolate,
  }, dispatch);
}

export default connect(null, mdtp)(Chocolate);
