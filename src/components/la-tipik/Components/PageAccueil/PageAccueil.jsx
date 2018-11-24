import React, { Component } from 'react';
import FondCardsAccueil from './FondCardsAccueil';
import Header from './Header';
import Apropos from './Apropos'


class PageAccueil extends Component {
    render() {
        return (
            <div>
                
                <Header />
                <FondCardsAccueil />
                <Apropos />
            </div>
        )
    }

}

export default PageAccueil;