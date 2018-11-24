import React from 'react';
import { Button } from 'reactstrap';
import './Button.css';


export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button className="color-button " outline >Catalogue</Button>{' '}
      </div>
    );
  }
}
