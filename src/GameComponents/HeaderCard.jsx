import React from "react"

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HeaderCard(categoryText) {
    return (
        <Col>
        <Card className="cardHeader" style={{ height: "6rem" }}>
            <Card.Body>
                <Card.Text className="cardHeaderText">
                    {categoryText}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}
