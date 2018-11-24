import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './CardSearch.css';

class CardSearch extends Component {
    render() {
        return(
            <div className={`${this.props.appear} w-50`}>
                <Card>
                    <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardSearch;