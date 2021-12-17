import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner_item w-full" >
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/rxzzCgH/restaurantbg1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">Trigger the senses with longer menu food</h2>
                    <h5 className="text-white">A restaurant concept is the overall idea or theme that defines the restaurant</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/51LNzXX/restaurantbg2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">Tasty Food. Invariably the food is tasty and well prepared.</h2>
                    <h5 className=" text-white"> a brief history of the restaurant, its owner and the head chef, as well as its menu features and social media plans.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/wwYHGcx/restaurantbg3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="banner_description align-middle">
                    <h2 className="text-5xl text-white">Hygiene and Cleanliness.</h2>
                    <h5 className=" text-white">Restaurants can introduce diners to different cultures through food, music and décor.</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;