import React from "react"

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Game, {selectClue} from "../components/Game";

export default function BoardCard(props, amount, num1, num2) {
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Text>
                    <Button onClick={(e) => props.selectClue({num1}, {num2})}>{amount}</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}
