import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FormCatalogue from './FormCatalogue';
import './PageCatalogue.css';
import FiltresAppliques from './FiltresAppliques';
import ResultatsCatalogue from './ResultatsCatalogue';

class PageCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = (this.props.location.state) ? 
        {
            critereRegion:this.props.location.state.critereRegion,
            critereTheme:this.props.location.state.critereTheme,
            critereType:this.props.location.state.critereType,
            cards:this.props.location.state.cards,
            resultCards:this.props.location.state.resultCards,
            hauteur: 0,
        } : {
            critereRegion:'',
            critereTheme:'',
            critereType:'',
            hauteur: 0,
        };
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        let hauteur = window.innerHeight - 190;
        this.setState({
            hauteur: hauteur,
        }, () => console.log(this.state));
    }

    search(criteres) {
        this.setState({
            critereRegion: criteres.critereRegion,
            critereTheme: criteres.critereTheme,
            critereType: criteres.critereType,
        });
    }
    
    render() {
        return(
            <Container fluid style={{ minHeight: this.state.hauteur }} className="bodyPageCatalogue">
                <div className="mb-3 w-100 border-top border-secondary"></div>
                <FiltresAppliques
                    filtreDestination={this.state.critereRegion}
                    filtreType={this.state.critereType}
                    filtreTheme={this.state.critereTheme}
                />
                <Row>
                    <Col md='12' lg='2'>
                        <FormCatalogue 
                            critereRegion={this.state.critereRegion}
                            critereType={this.state.critereType}
                            critereTheme={this.state.critereTheme}
                            search= {this.search}
                        />
                    </Col>
                    <Col md='12' lg='10'>
                        <ResultatsCatalogue 
                            critereRegion={this.state.critereRegion}
                            critereType={this.state.critereType}
                            critereTheme={this.state.critereTheme}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
        
export default PageCatalogue;