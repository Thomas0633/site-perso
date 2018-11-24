import React, { Component } from 'react';
import './contact.css';

class Copyright extends Component {
    render() {
        return(
            <div className='pt-2 pb-2 mt-5 copyrightCv'>
                <p className='m-0 font-weight-light'>Copyright <i className="far fa-copyright"></i> Développé par Thomas Bulle - Tous droits réservés</p>
            </div>
        )
    }
}

export default Copyright;