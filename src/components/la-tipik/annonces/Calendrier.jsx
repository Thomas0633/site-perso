import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import './Calendrier.css'
import 'react-day-picker/lib/style.css';


class Calendrier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
        }
    }

    componentDidMount() {
        this.setState({
            date: new Date(),

        })

    }

    render() {
        
        return (
            <div>
                <DayPicker
                    className="Calendrier"
                    pagedNavigation fixedWeeks
                />
            </div>

        );
    }
}

export default Calendrier;