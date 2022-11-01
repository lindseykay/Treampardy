import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AnswerModal from "../GameComponents/AnswerModal";
import Clue from "../GameComponents/Clue";
import GameBoard from "../GameComponents/GameBoard";
import EndPage from "../GameComponents/EndPage";
import StartPage from "../GameComponents/StartPage";



export default function Game() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="gameboard/" element={<GameBoard />} />
                    <Route element={<Clue />} />
                    <Route element={<AnswerModal />} />
                    <Route element={<EndPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
