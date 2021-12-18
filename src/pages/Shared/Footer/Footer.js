import { faMailBulk, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    const loc = <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> //fontawesome import
    const mbl = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const mail = <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
    const fb = <i class="fab fa-facebook-f"></i>
    const twitter = <i class="fab fa-twitter"></i>
    const google = <i class="fab fa-google"></i>
    return (
        <div className="p-5 text-white mt-5" style={{ backgroundColor: 'royalblue' }}>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col xs className="text-start">
                        <Col xs>
                            <img className="mx-auto pt-3" src="https://i.ibb.co/Pzf2DTs/52239.png" width="20%" alt="" />
                        </Col>
                        <Col xs><h5>Contact Us</h5></Col>
                        <Col xs>{loc} Chattogram, Bangladesh</Col>
                        <Col xs>{mbl} Mobile: +880 1300023918</Col>
                        <Col xs>{mail} Mail: opibarua1122@gmail.com</Col>
                    </Col>
                    <Col xs className="text-start">
                        <Col xs><h5>Subscribe</h5></Col>
                        <Col xs><input type="text" className="w-75 round-lg mb-2" /></Col>
                        <Col xs><button className="btn btn-outline-secondary">Subscribe</button></Col>
                    </Col>
                    <Col xs className="text-start">
                        <Col xs><h5>Others</h5></Col>
                        <Col xs><div className="icon">
                            <div className="facebook"><a href="https://www.facebook.com/opi.barua.56/">{fb}</a></div>
                            <div className="twitter"><a href="#">{twitter}</a></div>
                            <div className="google"><a href="#">{google}</a></div>
                        </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;