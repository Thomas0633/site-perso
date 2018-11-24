import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, Button, CardBody, CardTitle, CardText } from 'reactstrap';
import CardCatalogue from './CardCatalogue';

class ResultatsCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount() {
        const config = {
            method: "GET",
        };
        const url = "http://92.175.11.66:3000/create/api/rents";
        
        fetch(url, config)
        .then(res => res.json())
        .then(data => 
            this.setState({
                cards : data,
            })
        );
        
    }

    render() { 
        return(
            <Container>
                <Row>
                    {this.state.cards.map(card => {
                        let triAll = ((this.props.critereRegion ===card.localisation ) && (this.props.critereTheme===card.theme) && (this.props.critereType ===card.type_logement)), /* tri de tout */
                        triRegion = ((this.props.critereRegion ===card.localisation ) && (this.props.critereTheme==="") && (this.props.critereType ==="")), /* Tri region */
                        triRegionTheme = ((this.props.critereRegion ===card.localisation ) && (this.props.critereTheme===card.theme) && (this.props.critereType ==="")),/* Tri Region + Theme */
                        triTheme = ((this.props.critereRegion ==="") && (this.props.critereTheme===card.theme) && (this.props.critereType ==="")), /* tri theme */
                        triType = ((this.props.critereRegion ==='' ) && (this.props.critereTheme==='') && (this.props.critereType ===card.type_logement)), /* tri sale type */
                        triRegionType = ((this.props.critereRegion ===card.localisation ) && (this.props.critereTheme==="") && (this.props.critereType ===card.type_logement)), /* tri Region+type*/
                        triThemeType = ((this.props.critereRegion ==="" ) && (this.props.critereTheme===card.theme) && (this.props.critereType ===card.type_logement)),/* tri Theme Type*/
                        triNothing = ((this.props.critereRegion ==="" ) && (this.props.critereTheme==='') && (this.props.critereType ==='')); /* TRI QUE DALLE */
                        if(triAll || triRegion || triRegionTheme || triRegionType || triTheme || triThemeType || triType || triNothing){
                            return (
                                <CardCatalogue card={card} image1={card.image1} titre={card.titre} localisation={card.localisation} theme={card.theme} prix={card.prix}  />
                            )
                        } 
                    })}
                </Row>
            </Container>
        )
    }
}
 
export default ResultatsCatalogue;
