import React from "react"
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

export default function AnswerModal(props) {
    return (
        <Modal show={props.showAnswerBool} backdrop="static" centered keyboard={false}>
            <Modal.Header>
                <Modal.Title>For: ${props.selectedValue}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                What/who is/was <strong>{props.selectedClue.answer}</strong>?
                <br />
                <br />
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup>
                    <Button variant="success" onClick={(e) => {props.setScore(props.score + props.selectedClue.value); props.endTurn(true)}}>I got it right!</Button>
                    <Button variant="danger" onClick={(e) => {props.setScore(props.score - props.selectedClue.value); props.endTurn(false)}}>I got it wrong!</Button>
                </ButtonGroup>
            </Modal.Footer>
        </Modal>
    )
};
