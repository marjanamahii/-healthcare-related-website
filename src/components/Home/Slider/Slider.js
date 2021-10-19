import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block w-100" src="https://soffront.com/wp-content/uploads/2020/11/healthcare1.png" alt="First Slide" />
                <Carousel.Caption>
                    <div>
                        <h3>Healthcare is becoming part of information technology.</h3>
                        <p>Fundamentally, the answers to our challenges in healthcare relies in engaging and empowering the individual.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://soffront.com/wp-content/uploads/2020/11/healthcare1.png" alt="First Slide" />
                <Carousel.Caption>
                    <div className="text=primary">
                        <h3>Healthcare is becoming part of information technology.</h3>
                        <p>Fundamentally, the answers to our challenges in healthcare relies in engaging and empowering the individual.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Slider;
