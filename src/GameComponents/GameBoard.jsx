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
                {HeaderBar("TREAMPARDY")}
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
                        {BoardCard(props, "200", 1, 0)}
                        {BoardCard(props, "200", 2, 0)}
                        {BoardCard(props, "200", 3, 0)}
                        {BoardCard(props, "200", 4, 0)}
                        {BoardCard(props, "200", 5, 0)}
                    </Row>
                    <Row>
                        {BoardCard(props, "400", 0, 1)}
                        {BoardCard(props, "400", 1, 1)}
                        {BoardCard(props, "400", 2, 1)}
                        {BoardCard(props, "400", 3, 1)}
                        {BoardCard(props, "400", 4, 1)}
                        {BoardCard(props, "400", 5, 1)}
                    </Row>
                    <Row>
                        {BoardCard(props, "600", 0, 2)}
                        {BoardCard(props, "600", 1, 2)}
                        {BoardCard(props, "600", 2, 2)}
                        {BoardCard(props, "600", 3, 2)}
                        {BoardCard(props, "600", 4, 2)}
                        {BoardCard(props, "600", 5, 2)}
                    </Row>
                    <Row>
                        {BoardCard(props, "800", 0, 3)}
                        {BoardCard(props, "800", 1, 3)}
                        {BoardCard(props, "800", 2, 3)}
                        {BoardCard(props, "800", 3, 3)}
                        {BoardCard(props, "800", 4, 3)}
                        {BoardCard(props, "800", 5, 3)}
                    </Row>
                    <Row>
                        {BoardCard(props, "1000", 0, 4)}
                        {BoardCard(props, "1000", 1, 4)}
                        {BoardCard(props, "1000", 2, 4)}
                        {BoardCard(props, "1000", 3, 4)}
                        {BoardCard(props, "1000", 4, 4)}
                        {BoardCard(props, "1000", 5, 4)}
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
