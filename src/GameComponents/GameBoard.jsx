import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HeaderBar from "./GameBoardHeader";
import HeaderCard from "./HeaderCard";
import BoardCard from "./BoardCard";
import ClueModal from "./ClueModal";
import AnswerModal from "./AnswerModal";

export default function GameBoard(props) {
    return (
        <>
            <div>
                {HeaderBar("text goes here?")}
            </div>
            <div>
                <Container fluid>
                    <Row>
                        {HeaderCard(props.category1.title?.toUpperCase())}
                        {HeaderCard(props.category2.title?.toUpperCase())}
                        {HeaderCard(props.category3.title?.toUpperCase())}
                        {HeaderCard(props.category4.title?.toUpperCase())}
                        {HeaderCard(props.category5.title?.toUpperCase())}
                        {HeaderCard(props.category6.title?.toUpperCase())}
                    </Row>
                    <br />
                    <Row>
                        {BoardCard(props, "200", 0, 0)}
                        {BoardCard("200")}
                        {BoardCard("200")}
                        {BoardCard("200")}
                        {BoardCard("200")}
                        {BoardCard("200")}
                    </Row>
                    <Row>
                        {BoardCard("400")}
                        {BoardCard("400")}
                        {BoardCard("400")}
                        {BoardCard("400")}
                        {BoardCard("400")}
                        {BoardCard("400")}
                    </Row>
                    <Row>
                        {BoardCard("600")}
                        {BoardCard("600")}
                        {BoardCard("600")}
                        {BoardCard("600")}
                        {BoardCard("600")}
                        {BoardCard("600")}
                    </Row>
                    <Row>
                        {BoardCard("800")}
                        {BoardCard("800")}
                        {BoardCard("800")}
                        {BoardCard("800")}
                        {BoardCard("800")}
                        {BoardCard("800")}
                    </Row>
                    <Row>
                        {BoardCard("1000")}
                        {BoardCard("1000")}
                        {BoardCard("1000")}
                        {BoardCard("1000")}
                        {BoardCard("1000")}
                        {BoardCard("1000")}
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
