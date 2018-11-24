import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './FormCatalogue.css';

class FormCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            critereRegion: '',
            critereType: '',
            critereTheme: '',
        };
        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    search() {
        this.props.search(this.state);
    }

    render() { 
        return(
            <div className="pt-2">
                <h3 className="pb-2">Filtres</h3>
                <Form>
                    <FormGroup>
                        <Label for="destinationCatalogue">Région</Label>
                        <Input type="select" value={this.state.critereRegion} name="critereRegion" id="destinationCatalogue" onChange={this.onChange}>
                            <option value='' selected>Région</option>
                            <option value='Sud-Ouest'>Sud-Ouest</option>
                            <option value='Ouest'>Ouest</option>
                            <option value='Nord-Ouest'>Nord-Ouest</option>
                            <option value='Nord'>Nord</option>
                            <option value='Nord-Est'>Nord-Est</option>
                            <option value='Est'>Est</option>
                            <option value='Sud-Est'>Sud-Est</option>
                            <option value='Sud'>Sud</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="typeCatalogue">Type d'hébergement</Label>
                        <Input type="select" value={this.state.critereType} name="critereType" id="typeCatalogue" onChange={this.onChange}>
                            <option value='' selected>Type d'hébergement</option>
                            <option value='Bulle'>Bulle</option>
                            <option value='Cabanne dans les arbres'>Cabane dans les arbres</option>
                            <option value='Dome'>Dome</option>
                            <option value="Habitation sur l'eau">Habitation sur l'eau</option>
                            <option value='Igloo'>Igloo</option>
                            <option value="Nid d'amour">Nid d'amour</option>
                            <option value='Roulotte'>Roulotte</option>
                            <option value='Tente suspendue'>Tente suspendue</option>
                            <option value='Tipi'>Tipi</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="themeCatalogue">Thématique</Label>
                        <Input type="select" value={this.state.critereTheme} name="critereTheme" id="themeCatalogue" onChange={this.onChange}>
                            <option value='' selected>Thème</option>
                            <option value='Aérien'>Aérien</option>
                            <option value='Eco-responsable'>Eco-responsable</option>
                            <option value='Famille'>Famille</option>
                            <option value='Mer'>Mer</option>
                            <option value='Montagne'>Montagne</option>
                            <option value='Nature'>Nature</option>
                            <option value='Neige'>Neige</option>
                            <option value='Détente'>Détente</option>
                            <option value='Romantique'>Romantique</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={this.search}>Rechercher</Button>
                </Form>
            </div>
        )
    }
}
 
export default FormCatalogue;