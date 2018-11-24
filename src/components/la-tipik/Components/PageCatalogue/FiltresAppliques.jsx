import React from 'react';
import './FiltresAppliques.css';

const FiltresAppliques = (props) =>  {
    console.log(props);
    return(
        <div className="d-flex justify-content-center align-items-center flex-wrap mb-4">
            <h4 className="m-0">Filtres appliqués :</h4>
            <span className="badge badge-secondary backgroundBadgeFiltresAppliques h-100 ml-2 mr-2">{props.filtreDestination}</span>
            <span className="badge badge-secondary backgroundBadgeFiltresAppliques h-100 ml-2 mr-2">{props.filtreType}</span>
            <span className="badge badge-secondary backgroundBadgeFiltresAppliques h-100 ml-2 mr-2">{props.filtreTheme}</span>
            <span className="badge badge-secondary backgroundBadgeFiltresAppliques h-100 ml-2 mr-2">{props.filtreDateDepart}</span>
            <span className="badge badge-secondary backgroundBadgeFiltresAppliques h-100 ml-2 mr-2">{props.filtreDateRetour}</span>
        </div>
    )
}

export default FiltresAppliques;