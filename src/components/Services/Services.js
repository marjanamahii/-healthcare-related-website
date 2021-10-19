import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <section id="services" className="services position-relative">
                <h3 className="position-absolute top-0 w-100 section-title fw-500 text-center text-uppercase text-white">
                    <span>Services</span>
                </h3>
                <div className="container py-4 py-lg-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="position-relative fs-35 fw-400 mb-5">
                                <span className="title-border mb-2 mb-lg-4 mt-0"></span>
                                <span>Our Services</span>
                            </h2>
                            <Row xs={1} md={2} className="g-4">
                                {
                                    services.map(service => <Service
                                        key={service.id}
                                        service={service}
                                    ></Service>)
                                }
                            </Row >
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Services;