import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Header from '../Header';
import CardSearch from './CardSearch';
import FiltresAppliques from './FiltresAppliques';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pays: '',
            france: 'hide',
            espagne: 'hide',
            angleterre: 'hide',
            etatsUnis: 'hide',
            belgique: 'hide',
            bresil: 'hide',
            canada: 'hide',
            chine: 'hide',
            color: ''
        }
        this.handleChangePays = this.handleChangePays.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangePays(event) {
        this.setState({
            pays: event.target.value
        });
    }

    handleChangeColor(event) {
        this.setState({
            color: event.target.value
        });
    }

    handleClick() {
        console.log(this.state);
        this.setState({
            france: 'hide',
            espagne: 'hide',
            angleterre: 'hide',
            etatsUnis: 'hide',
            belgique: 'hide',
            bresil: 'hide',
            canada: 'hide',
            chine: 'hide'
        });
        if ((this.state.pays === '') && (this.state.color === '')) {
            this.setState({
                france: 'hide',
                espagne: 'hide',
                angleterre: 'hide',
                etatsUnis: 'hide',
                belgique: 'hide',
                bresil: 'hide',
                canada: 'hide',
                chine: 'hide',
                color: ''
            });
        } else if (this.state.pays === 'france'){
            this.setState({
                france: 'noHide'
            });
        } else if (this.state.pays === 'espagne')  {
            this.setState({
                espagne: 'noHide'
            });
        } else if (this.state.pays === 'angleterre') {
            this.setState({
                angleterre: 'noHide'
            });
        } else if (this.state.pays === 'etats-unis') {
            this.setState({
                etatsUnis: 'noHide'
            });
        } else if (this.state.pays === 'belgique') {
            this.setState({
                belgique: 'noHide'
            });
        } else if (this.state.pays === 'bresil') {
            this.setState({
                bresil: 'noHide'
            });
        } else if (this.state.pays === 'canada') {
            this.setState({
                canada: 'noHide'
            });
        } else if (this.state.pays === 'chine') {
            this.setState({
                chine: 'noHide'
            });
        };
        switch (this.state.color) {
            case 'green':
                this.setState({
                    bresil: 'noHide'
                });
                break;
            case 'red':
                this.setState({
                    france: 'noHide',
                    espagne: 'noHide',
                    angleterre: 'noHide',
                    etatsUnis: 'noHide',
                    canada: 'noHide',
                    chine: 'noHide'
                });
                break;
            case 'yellow':
                this.setState({
                    espagne: 'noHide',
                    belgique: 'noHide',
                    bresil: 'noHide',
                    chine: 'noHide'
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <Header img={<i class="fas fa-search"></i>} txt="Recherche" />
                <FiltresAppliques filtrePays={this.state.pays} filtreColor={this.state.color} />

                <Container>
                    <Form>
                        <Row>
                            <Col md='6'>
                                <FormGroup>
                                    <Label for="pays">Pays</Label>
                                    <Input type="select" value={this.state.pays} name="pays" id="pays" onChange={this.handleChangePays}>
                                        <option value=""></option>
                                        <option value="france">France</option>
                                        <option value="espagne">Espagne</option>
                                        <option value="angleterre">Angleterre</option>
                                        <option value="etats-unis">Etats-Unis</option>
                                        <option value="belgique">Belgique</option>
                                        <option value="bresil">Bresil</option>
                                        <option value="canada">Canada</option>
                                        <option value="chine">Chine</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup>
                                    <Label for="color">Color</Label>
                                    <Input type="select" value={this.state.color} name="color" id="color" onChange={this.handleChangeColor}>
                                        <option value=""></option>
                                        <option value="green">Green</option>
                                        <option value="red">Red</option>
                                        <option value="yellow">Yellow</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button className="mb-5" onClick={this.handleClick}>Rechercher</Button>
                    </Form>

                    <div className="d-flex justify-content-center">
                        <CardSearch
                            appear={this.state.france}
                            img='http://flags.fmcdn.net/data/flags/w580/fr.png'
                            title='France'
                        />
                        <CardSearch
                            appear={this.state.espagne}
                            img='http://flags.fmcdn.net/data/flags/w580/es.png'
                            title='Espagne'
                        />
                        <CardSearch
                            appear={this.state.angleterre}
                            img='http://flags.fmcdn.net/data/flags/w580/gb.png'
                            title='Angleterre'
                        />
                        <CardSearch
                            appear={this.state.etatsUnis}
                            img='http://flags.fmcdn.net/data/flags/w580/us.png'
                            title='Etats-Unis'
                        />
                        <CardSearch
                            appear={this.state.belgique}
                            img='http://flags.fmcdn.net/data/flags/w580/be.png'
                            title='Belgique'
                        />
                        <CardSearch
                            appear={this.state.bresil}
                            img='http://flags.fmcdn.net/data/flags/w580/br.png'
                            title='Bresil'
                        />
                        <CardSearch
                            appear={this.state.canada}
                            img='http://flags.fmcdn.net/data/flags/w580/ca.png'
                            title='Canada'
                        />
                        <CardSearch
                            appear={this.state.chine}
                            img='http://flags.fmcdn.net/data/flags/w580/cn.png'
                            title='Chine'
                        />
                    </div>
                </Container>
            </div>
        )
    }
}

export default Search;