import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function HeaderBar(props, text) {
    return (
        <Navbar className="navBarStyles" variant="dark">
            <Container fluid>
                <Navbar.Collapse>
                    <Navbar.Brand>{text}</Navbar.Brand>
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
