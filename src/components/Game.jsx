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

    const fetchCategories = async() => {
        const fullUrl1 = `https://jservice.io/api/category?id=${url1}`;
        const fullUrl2 = `https://jservice.io/api/category?id=${url2}`;
        const fullUrl3 = `https://jservice.io/api/category?id=${url3}`;
        const fullUrl4 = `https://jservice.io/api/category?id=${url4}`;
        const fullUrl5 = `https://jservice.io/api/category?id=${url5}`;
        const fullUrl6 = `https://jservice.io/api/category?id=${url6}`;
        const fetchParameters = {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'origin': '',
            },
        };
        const response1 = await fetch(fullUrl1, fetchParameters);
        const response2 = await fetch(fullUrl2, fetchParameters);
        const response3 = await fetch(fullUrl3, fetchParameters);
        const response4 = await fetch(fullUrl4, fetchParameters);
        const response5 = await fetch(fullUrl5, fetchParameters);
        const response6 = await fetch(fullUrl6, fetchParameters);
        if (
            response1.ok &&
            response2.ok &&
            response3.ok &&
            response4.ok &&
            response5.ok &&
            response6.ok
        ) {
            const data1 = await response1.json();
            const data2 = await response2.json();
            const data3 = await response3.json();
            const data4 = await response4.json();
            const data5 = await response5.json();
            const data6 = await response6.json();
            setCategory1(data1);
            setCategory2(data2);
            setCategory3(data3);
            setCategory4(data4);
            setCategory5(data5);
            setCategory6(data6);
        }
    };

    useEffect(() => {
        fetchCategories()
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
