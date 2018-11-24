import React, { Component } from 'react';
import { Table, Container, Row } from 'reactstrap';
import Type from './Type';

class Tableau extends Component {
    render() {
        return (
            <div className="Tableau">
                <Container>
                    <Row>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Logement</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Type</td>
                                    <td><Type type="Bulle" /></td>
                                </tr>
                                <tr>
                                    <td>Heure d'arrivée</td>
                                    <td>14h00</td>
                                </tr>
                                <tr>
                                    <td>Heure de départ</td>
                                    <td>11h00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Serviettes et draps</td>
                                    <td>inclus</td>
                                </tr>
                                <tr>
                                    <td>Cuisine</td>
                                    <td>Non</td>
                                </tr>
                                <tr>
                                    <td>Petit déjeuner</td>
                                    <td>Oui</td>
                                </tr>
                                <tr>
                                    <td>Wifi</td>
                                    <td>Non</td>
                                </tr>
                                <tr>
                                    <td>Salle de bain privée</td>
                                    <td>Non</td>
                                </tr>
                                <tr>
                                    <td>Equipements</td>
                                    <td>Lit double</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div >
        );
    }
}
export default Tableau;