import React, { Component } from 'react';
import './contact.css';
import FollowContact from './FollowContact';
import InfoContact from './InfoContact';
import Copyright from './Copyright';

class Contact extends Component {
    render() {
        return(
            <div className='text-white contactCv' id='idContactCv'>
              <InfoContact />
              <FollowContact />
              <Copyright />
            </div>
        )
    }
}

export default Contact;