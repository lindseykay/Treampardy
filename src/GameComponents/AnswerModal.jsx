import React from "react"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";


export default function AnswerModal(props) {
    return (
        <Container>
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="/gameboard/">GameBoard</NavLink>
            <p>For {props.selectedClue.value} points:</p>
            <p>{props.selectedClue.answer}</p>

            <Button onClick={(e) => props.endTurn(true)}>Correct!</Button>
            <Button onClick={(e) => props.endTurn(false)}>Incorrect!</Button>


        </Container>
    )
};
