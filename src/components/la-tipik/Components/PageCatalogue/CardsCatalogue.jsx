import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './CardsCatalogue.css';


class CardsCatalogue extends Component {
    render() {
        return(
            <div className="mb-4">
                <Card className="bodyCardCatalogue">
                    <CardImg top width="100%" src={this.props.img} alt="Card image cap" className="sizeImgCatalogue" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>{this.props.text}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardsCatalogue;