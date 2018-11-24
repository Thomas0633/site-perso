import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class CarouselImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }



    render() {
        return (
            <Carousel  showStatus={false} transitionTime={1500} infiniteLoop={true} autoPlay={true} dynamicHeight={true} showThumbs={false}>
                <div>
                    <img src={this.props.images[0]} />
                    
                </div>
                <div>
                    <img src={this.props.images[1]} />
                    
                </div>
                <div>
                    <img src={this.props.images[2]} />
                    
                </div>
            </Carousel>
        );
    }
}

export default CarouselImage;