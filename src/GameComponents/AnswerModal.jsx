import React from "react"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


export default function AnswerModal(props) {
    return (
        <Modal show={props.showAnswerBool} backdrop="static" keyboard={false}>
            <Modal.Header>
                <Modal.Title>For: {props.selectedClue.value}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.selectedClue.answer}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => props.endTurn(true)}>Correct!</Button>
                <Button onClick={(e) => props.endTurn(false)}>Incorrect!</Button>
            </Modal.Footer>
        </Modal>
    )
};
