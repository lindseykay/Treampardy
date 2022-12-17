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
};

export default function Game() {

    const [categoryList, setCategoryList] = useState([]);
    const [selectedClue, setSelectedClue] = useState({});
    const [showClueBool, setShowClueBool] = useState(false);
    const [showAnswerBool, setShowAnswerBool] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});
    const [selectedValue, setSelectedValue] = useState(0);
    const [score, setScore] = useState(0);

    let navigate = useNavigate();


    useEffect(() => {
        let tempCategoryList = []
        const fetchCategories = async() => {
            // const fetchParameters = {
                // method: 'GET',
                // mode: 'cors',
                // credentials: 'include',
                // referrerPolicy: 'strict-origin-when-cross-origin',
                // headers: {
                    // "Content-Type": "application/json",
                    // 'Access-Control-Allow-Origin': "https://localhost:3000",
                // },
            // };
            for (let i = 0; i < urlNumsList.length; i++) {
                console.log(i);
                const response = await fetch(`https://jservice.io/api/category?id=${urlNumsList[i]}`)
                if (response.ok) {
                    const data = await response.json();
                    tempCategoryList.push(data);
                } else {
                    console.log("Sorry you got a bad response!!!");
                };
            }
        }
        fetchCategories();
        setCategoryList(tempCategoryList);
    }, []);

        useEffect(() => {
        let tempCategoryList = []
        const fetchCategories = async() => {
            // const fetchParameters = {
                // method: 'GET',
                // mode: 'cors',
                // credentials: 'include',
                // referrerPolicy: 'strict-origin-when-cross-origin',
                // headers: {
                    // "Content-Type": "application/json",
                    // 'Access-Control-Allow-Origin': "https://localhost:3000",
                // },
            // };
            for (let i = 0; i < urlNumsList.length; i++) {
                console.log(i);
                const response = await fetch(`https://jservice.io/api/category?id=${urlNumsList[i]}`)
                if (response.ok) {
                    const data = await response.json();
                    tempCategoryList.push(data);
                } else {
                    console.log("Sorry you got a bad response!!!");
                };
            }
        }
        fetchCategories();
        setCategoryList(tempCategoryList);
    }, []);


    function selectClue(category, clueNumber) {
        setSelectedValue((clueNumber + 1) * 200)
        if (category === 0) {
            setSelectedClue(categoryList[0].clues[clueNumber])
            setSelectedCategory(categoryList[0])
        } else if (category === 1) {
            setSelectedClue(categoryList[1].clues[clueNumber])
            setSelectedCategory(categoryList[1])
        } else if (category === 2) {
            setSelectedClue(categoryList[2].clues[clueNumber])
            setSelectedCategory(categoryList[2])
        } else if (category === 3) {
            setSelectedClue(categoryList[3].clues[clueNumber])
            setSelectedCategory(categoryList[3])
        } else if (category === 4) {
            setSelectedClue(categoryList[4].clues[clueNumber])
            setSelectedCategory(categoryList[4])
        } else if (category === 5) {
            setSelectedClue(categoryList[5].clues[clueNumber])
            setSelectedCategory(categoryList[5])
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
                    category1={categoryList[0]}
                    category2={categoryList[1]}
                    category3={categoryList[2]}
                    category4={categoryList[3]}
                    category5={categoryList[4]}
                    category6={categoryList[5]}
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
