import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import CardSelect from './CardSelect';
import { CardGroup } from 'reactstrap';
import './sectionSelect.css';


class SectionSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    
    render() {
        return(
            <div className={this.props.backgroundColor2}>
                <div className={`text-left pt-5 pb-5 ${this.props.backgroundColor}`}>
                    <Container>
                        <h2 className='pb-4 titleShadows whiteTitle'><i className="far fa-star"></i> {this.props.title}</h2>
                        <Row className='justify-content-center'>
                                <CardSelect                                                       
                                    colorTxt={this.props.colorTxt}
                                    objetAnnonce={this.props.objetAnnonce[0]}
                                       />
                                <CardSelect                                  
                                    colorTxt={this.props.colorTxt}
                                    objetAnnonce={this.props.objetAnnonce[1]}
                                />
                                <CardSelect                                 
                                    colorTxt={this.props.colorTxt}
                                    objetAnnonce={this.props.objetAnnonce[2]}
                                />
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default SectionSelect;