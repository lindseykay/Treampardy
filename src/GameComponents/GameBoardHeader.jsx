import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function HeaderBar(text) {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>{text}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
