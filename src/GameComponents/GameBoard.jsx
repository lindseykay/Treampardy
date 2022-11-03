import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderBar from "./GameBoardHeader";
import HeaderCard from "./HeaderCard";
import BoardCard from "./BoardCard";
import ClueModal from "./ClueModal";
import AnswerModal from "./AnswerModal";

export default function GameBoard(props) {
    return (
        <>
            <div>
                {HeaderBar(props, "TREAMPARDY")}
            </div>
            <div>
                <Container fluid>
                    <Row>
                        <Col>{HeaderCard(props.category1.title?.toUpperCase())}</Col>
                        <Col>{HeaderCard(props.category2.title?.toUpperCase())}</Col>
                        <Col>{HeaderCard(props.category3.title?.toUpperCase())}</Col>
                        <Col>{HeaderCard(props.category4.title?.toUpperCase())}</Col>
                        <Col>{HeaderCard(props.category5.title?.toUpperCase())}</Col>
                        <Col>{HeaderCard(props.category6.title?.toUpperCase())}</Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>{BoardCard(props, "200", 0, 0)}</Col>
                        <Col>{BoardCard(props, "200", 1, 0)}</Col>
                        <Col>{BoardCard(props, "200", 2, 0)}</Col>
                        <Col>{BoardCard(props, "200", 3, 0)}</Col>
                        <Col>{BoardCard(props, "200", 4, 0)}</Col>
                        <Col>{BoardCard(props, "200", 5, 0)}</Col>
                    </Row>
                    <Row>
                        <Col>{BoardCard(props, "400", 0, 1)}</Col>
                        <Col>{BoardCard(props, "400", 1, 1)}</Col>
                        <Col>{BoardCard(props, "400", 2, 1)}</Col>
                        <Col>{BoardCard(props, "400", 3, 1)}</Col>
                        <Col>{BoardCard(props, "400", 4, 1)}</Col>
                        <Col>{BoardCard(props, "400", 5, 1)}</Col>
                    </Row>
                    <Row>
                        <Col>{BoardCard(props, "600", 0, 2)}</Col>
                        <Col>{BoardCard(props, "600", 1, 2)}</Col>
                        <Col>{BoardCard(props, "600", 2, 2)}</Col>
                        <Col>{BoardCard(props, "600", 3, 2)}</Col>
                        <Col>{BoardCard(props, "600", 4, 2)}</Col>
                        <Col>{BoardCard(props, "600", 5, 2)}</Col>
                    </Row>
                    <Row>
                        <Col>{BoardCard(props, "800", 0, 3)}</Col>
                        <Col>{BoardCard(props, "800", 1, 3)}</Col>
                        <Col>{BoardCard(props, "800", 2, 3)}</Col>
                        <Col>{BoardCard(props, "800", 3, 3)}</Col>
                        <Col>{BoardCard(props, "800", 4, 3)}</Col>
                        <Col>{BoardCard(props, "800", 5, 3)}</Col>
                    </Row>
                    <Row>
                        <Col>{BoardCard(props, "1000", 0, 4)}</Col>
                        <Col>{BoardCard(props, "1000", 1, 4)}</Col>
                        <Col>{BoardCard(props, "1000", 2, 4)}</Col>
                        <Col>{BoardCard(props, "1000", 3, 4)}</Col>
                        <Col>{BoardCard(props, "1000", 4, 4)}</Col>
                        <Col>{BoardCard(props, "1000", 5, 4)}</Col>
                    </Row>
                </Container>
            </div>
            <div>
                {ClueModal(props)}
                {AnswerModal(props)}
            </div>
        </>
    )
}
