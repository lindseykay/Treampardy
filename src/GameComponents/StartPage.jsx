import React from "react";
import Button from "react-bootstrap/Button";

export default function StartPage(props) {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <div className="col-lg-6 mx-auto">
                    <h1>
                        This is Treampardy!
                    </h1>
                    <br/>
                    <div className="d-grid gap-2">
                        <Button size="lg" onClick={(e) => props.gameStart()}>Click to begin</Button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <p>
                    Cindy Chiang
                </p>
                <p>
                    Lindsey Carlson
                </p>
                <p>
                    Jeff Pettit
                </p>
                <p>
                    Version: 0.1
                </p>
            </div>
        </>


    )
}
