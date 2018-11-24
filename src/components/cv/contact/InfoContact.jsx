import React, { Component } from 'react';
import './contact.css';

class InfoContact extends Component {
    render() {
        return(
            <div className='w-100 infoContactCv'>
                <h3 className='m-0 font-weight-light titleFollowCv'><i className="fas fa-map-marker-alt"></i> Localisation</h3>
                <div className='containerMapCv'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46242.64249060434!2d7.069828074220365!3d43.582276155544996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd5459e5a91a9%3A0x40819a5fd979fb0!2sAntibes!5e0!3m2!1sfr!2sfr!4v1542228145407" frameborder="0" style={{ border:0 }} allowfullscreen className='mapInfoContactCv'></iframe>
                </div>
                <h4 className='font-weight-light pt-4 pb-4'><i className="fas fa-location-arrow"></i> Antibes, Alpes-Maritimes</h4>
            </div>
        )
    }
}

export default InfoContact;