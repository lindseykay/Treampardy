import React from "react"

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HeaderCard(categoryText) {
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Text>
                    {categoryText}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}
