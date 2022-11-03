import React from "react"

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HeaderCard(categoryText) {
    return (
        <Col>
        <Card className="cardStyles" style={{ height: "6rem" }}>
            <Card.Body style={{ verticalAlign: "middle" }}>
                <Card.Text>
                    {categoryText}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}
