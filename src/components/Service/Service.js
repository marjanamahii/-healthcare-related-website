import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { title, description, img } = props.service
    return (
        <div>
            <Col>
                <Card border="secondary">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Description: {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;