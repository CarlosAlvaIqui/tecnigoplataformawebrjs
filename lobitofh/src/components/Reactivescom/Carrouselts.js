import React from 'react';
import { Carousel } from 'react-bootstrap';

import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';


const CarouselComponent = props => {
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={slide1} alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide2} alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide3} alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Thir slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide4} alt="Fourth slide"/>
                <Carousel.Caption>
                    <h3>Fourt slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        );
};
export default CarouselComponent;