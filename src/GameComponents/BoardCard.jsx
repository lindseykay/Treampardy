import React from "react"

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function BoardCard(amount) {
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Text>
                    {amount}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}
