import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom';

import GameBoard from "../GameComponents/GameBoard";
import EndPage from "../GameComponents/EndPage";
import StartPage from "../GameComponents/StartPage";

let urlNumsList = [];
while (urlNumsList.length < 6) {
    let urlNum = Math.floor(Math.random() * 27723 + 1);
    if (!urlNumsList.includes(urlNum)) {
        urlNumsList.push(urlNum);
    }
}
const [url1, url2, url3, url4, url5, url6] = urlNumsList;


export default function Game() {

    const [category1, setCategory1] = useState({})
    const [category2, setCategory2] = useState({})
    const [category3, setCategory3] = useState({})
    const [category4, setCategory4] = useState({})
    const [category5, setCategory5] = useState({})
    const [category6, setCategory6] = useState({})
    const [selectedClue, setSelectedClue] = useState({})
    const [showClueBool, setShowClueBool] = useState(false)
    const [showAnswerBool, setShowAnswerBool] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({})
    const [selectedValue, setSelectedValue] = useState(0)
    const [score, setScore] = useState(0)

    let navigate = useNavigate();

    useEffect(() => {
        async function fetchCategory1() {
            const url = `http://jservice.io/api/category?id=${url1}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCategory1(data);
            }
        }
        fetchCategory1();
    }, []);

    useEffect(() => {
        async function fetchCategory2() {
            const url = `http://jservice.io/api/category?id=${url2}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCategory2(data);
            }
        }
        fetchCategory2();
    }, []);

    useEffect(() => {
        async function fetchCategory3() {
            const url = `http://jservice.io/api/category?id=${url3}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCategory3(data);
            }
        }
        fetchCategory3();
    }, []);

    useEffect(() => {
        async function fetchCategory4() {
            const url = `http://jservice.io/api/category?id=${url4}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCategory4(data);
            }
        }
        fetchCategory4();
    }, []);

    useEffect(() => {
        async function fetchCategory5() {
            const url = `http://jservice.io/api/category?id=${url5}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCategory5(data);
            }
        }
        fetchCategory5();
    }, []);

    useEffect(() => {
        async function fetchCategory6() {
            const url = `http://jservice.io/api/category?id=${url6}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCategory6(data);
            }
        }
        fetchCategory6();
    }, []);

    function selectClue(category, clueNumber) {
        setSelectedValue((clueNumber + 1) * 200)
        if (category === 0) {
            setSelectedClue(category1.clues[clueNumber])
            setSelectedCategory(category1)
        } else if (category === 1) {
            setSelectedClue(category2.clues[clueNumber])
            setSelectedCategory(category2)
        } else if (category === 2) {
            setSelectedClue(category3.clues[clueNumber])
            setSelectedCategory(category3)
        } else if (category === 3) {
            setSelectedClue(category4.clues[clueNumber])
            setSelectedCategory(category4)
        } else if (category === 4) {
            setSelectedClue(category5.clues[clueNumber])
            setSelectedCategory(category5)
        } else if (category === 5) {
            setSelectedClue(category3.clues[clueNumber])
            setSelectedCategory(category6)
        }
        setShowClueBool(true);
    }

    function showAnswer() {
        setShowClueBool(false);
        setShowAnswerBool(true);
    }

    function endTurn(gotAnswerCorrect) {
        console.log(gotAnswerCorrect);
        navigate("/gameboard", { replace: true });
        setShowAnswerBool(false)
    }

    function gameStart() {
        navigate("/gameboard", { replace: true });
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<StartPage
                    gameStart={gameStart}/>} />
                <Route path="gameboard/" element={<GameBoard
                    category1={category1}
                    category2={category2}
                    category3={category3}
                    category4={category4}
                    category5={category5}
                    category6={category6}
                    selectClue={selectClue}
                    showAnswer={showAnswer}
                    showClueBool={showClueBool}
                    selectedClue={selectedClue}
                    showAnswerBool={showAnswerBool}
                    selectedCategory={selectedCategory}
                    selectedValue={selectedValue}
                    endTurn={endTurn}
                    score = {score}
                    setScore = {setScore} />} />
                <Route element={<EndPage />} />
            </Routes>
        </div>
    );
}
