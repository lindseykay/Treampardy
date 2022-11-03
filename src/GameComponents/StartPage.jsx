import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";


export default function StartPage(props) {
    return (
        <>
            <div>This</div>
            <div>Is</div>
            <div>Treampardy!</div>
            <Button onClick={(e) => props.gameStart()}>Click to begin</Button>
        </>


    )
}
