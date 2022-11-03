import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function HeaderBar(props, text) {
    return (
        <Navbar className="navBarStyles" variant="dark">
            <Container fluid>
                <Navbar.Collapse>
                    <Navbar.Brand>
                        <img src="/Treampardy-Logo-White.svg" width="30" height="30" className="d-inline-block align-top" alt="Treampardy Header Logo"/>
                        {text}
                    </Navbar.Brand>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <p>Score: <strong>{props.score}</strong></p>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
