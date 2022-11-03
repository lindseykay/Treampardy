import React from "react"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


export default function ClueModal(props) {
    return (
        <Modal show={props.showClueBool} backdrop="static" centered keyboard={false}>
            <Modal.Header>
                <Modal.Title>For: {props.selectedClue.value}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                {props.selectedClue.question}...
                <br />
                <br/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => props.showAnswer()}>Show me the QUESTION</Button>
            </Modal.Footer>
        </Modal>
    )
}
