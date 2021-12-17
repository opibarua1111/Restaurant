import { Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="mt-3">
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
                About Us
            </Typography>
            <Row xs={1} md={1} lg={2} className="d-flex md:pt-5 pb-5 mx-0">
                <Col className="col-lg-6 p-5 mt-5">
                    <h1 className="text-secondary fw-bold">jewellery</h1>
                    <h5 className="d-flex align-items-center ">Jewelry Store Nyc safe and secure! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted.</h5>
                </Col>
                <Col className="col-lg-6 photo sm:mt-5">
                    <img src="https://i.ibb.co/h8JyRxQ/jewellery-about.jpg" alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default AboutUs;