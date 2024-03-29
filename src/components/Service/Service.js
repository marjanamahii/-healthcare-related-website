import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { title, description, img } = props.service
    return (
        <div className=
            "pb-3">
            <Col>
                <Card border="secondary">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <button>Click Here</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;