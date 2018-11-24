import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './Tabs.css';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <strong>Regions</strong>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            <strong>Types</strong>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            <strong>Thèmes</strong>
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">

                        <Card body className="bordureTab">

                            <Row >
                                <Col sm={{ size: 2, offset: 2 }} className="mt-1 mb-2 text-center ">
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/18.png" alt="Sud-Ouest" />
                                            <p>Sud-Ouest</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-1 mb-2 text-center " >
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/17.png" alt="Ouest" />
                                            <p>Ouest</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-1 mb-2 text-center " >
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/19.png" alt="Nord-Ouest" />
                                            <p>Nord-Ouest</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 2, offset: 2 }} className="mt-1 mb-2 text-center" >
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/3.png" alt="Nord" />
                                            <p>Nord</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col sm={{ size: 2, offset: 1 }} className="mt-1 mb-2 text-center" >
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/22.png" alt="Nord-Est" />
                                            <p>Nord-Est</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-1 mb-2 text-center" >
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/2.png" alt="Est" />
                                            <p>Est</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 2, offset: 2 }} className="mt-1 mb-4 text-center" >
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/5.png" alt="Sud-Est" />
                                            <p>Sud-Est</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-1 mb-4 text-center" >
                                    <div className="zoom colonne">
                                        <div className="fondColorLogo d-flex  justify-content-center align-items-center flex-column">
                                            <img width="60%" src="http://www.hebergement-insolite.com/img/carte_g_r/8.png" alt="Sud" />
                                            <p>Sud</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </TabPane>


                    <TabPane tabId="2">

                        <Card body>
                            <Row >
                                <Col sm={{ size: 2, offset: 2 }} className="mt-3 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/BulleLogo.png" alt="Bulle" />
                                            <p >Bulle</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-3 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/Cabane-tree.png" alt="Cabane-tree" />
                                            <p>Cabane dans les arbres</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-3 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/Dome.png" alt="Dome" />
                                            <p>Dome</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row >
                                <Col sm={{ size: 2, offset: 2 }} className="mt-3 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/MaisonEau.png" alt="Maison Eau" />
                                            <p>Habitation sur l'eau</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-3 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/Iglow.png" alt="Iglow" />
                                            <p>Igloo</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-3 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/loveNid.png" alt="Nid d'amour" />
                                            <p>Nid d'amour</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{ size: 2, offset: 2 }} className="mt-3 mb-4 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/roulotte.png" alt="Roulotte" />
                                            <p>Roulotte</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-3 mb-4 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/TenteSuspendu.png" alt="Tente suspendu" />
                                            <p>Tente suspendu</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-3 mb-4 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img src="/ressources/la-tipik/image/logos/tipiLogo.png" alt="Tipi" />
                                            <p>Tipi</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </TabPane>

                    <TabPane tabId="3">

                        <Card body>
                            <Row>
                                <Col sm={{ size: 2, offset: 2 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/inTheAir.png" alt="Aerien" />
                                            <p>Aerien</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/ecolo.png" alt="Ecologique" />
                                            <p>Eco-responsable</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/familial.png" alt="Familial" />
                                            <p>Famille</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 2, offset: 2 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/water.png" alt="Mer" />
                                            <p>Mer</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/montagne.png" alt="montagne" />
                                            <p>Montagne</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-2 mb- text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/nature.png" alt="Nature" />
                                            <p>Nature</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 2, offset: 2 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/neige.png" alt="Neige" />
                                            <p>Neige</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/farniente.png" alt="Repos" />
                                            <p>Repos, détente</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }} className="mt-2 mb-2 text-center">
                                    <div className="zoom colonne">
                                        <div>
                                            <img width="60%" src="/ressources/la-tipik/image/logos/romantique.png" alt="Romantique" />
                                            <p>Romantique</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </TabPane>
                </TabContent>
            </div >
        );
    }
}
