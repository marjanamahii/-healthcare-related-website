import React from 'react';
import { Col, Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <>
            <div className="footer-area bg-dark py-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <a href="/">
                                <Image src={logo} />
                            </a>
                            <div className="footer-left-info border-0">
                                <p className="text-white">21st Century is proud to employ a team of 50+ full-time employees – each with a specific field of expertise.</p>

                            </div>
                        </div>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content text-white">
                                <h3>Our <span className="text-warning">Offices</span></h3>
                                <div className="location">
                                    <i className="fa fa-map-marker mt-1" aria-hidden="true"></i>
                                    <p>1460 Broadway
                                        <br /> New York, NY 10036</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content text-white">
                                <h3 className="fs-19 text-uppercase fw-500">Quick <span className="text-warning">Links</span></h3>
                                <ListGroup>
                                    <Link to="#">Why HealthCare</Link>
                                    <Link to="#">About Us</Link>
                                    <Link to="#">Services</Link>
                                    <Link to="#">Login</Link>
                                    <Link to="#">Registration</Link>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content text-white">
                                <h3 className="fs-19 fw-500">Services <span className="text-warning">Area</span></h3>
                                <ListGroup>
                                    <Link to="#">Personal / Companion Home Care</Link>
                                    <Link to="#">Private Duty Skilled Home Health Care</Link>
                                    <Link to="#">Medicare / Skilled Home Health Care</Link>
                                    <Link to="#">Home Infusion Therapy</Link>
                                    <Link to="#">Wound Care</Link>
                                    <Link to="#">Hospice</Link>
                                    <Link to="#">Pediatrics</Link>
                                </ListGroup>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
            <footer className="site-footer py-3">
                <div className="container">
                    <p className="text-center text-sm-left">Copyright &copy; 2021 <a
                        href="/"><strong>Health Care</strong></a>. All Rights reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;