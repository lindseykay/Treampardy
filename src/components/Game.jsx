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
// const [url1, url2, url3, url4, url5, url6] = urlNumsList;

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
            const fetchParameters = {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                // referrerPolicy: 'strict-origin-when-cross-origin',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Content-Type": "application/json",
                },
            }
            for (let i = 0; i < urlNumsList.length; i++) {
                console.log(i);
                const response = await fetch (`http://jservice.io/api/category?id=${urlNumsList[i]}`, fetchParameters)
                setTimeout(2000);
                if (response.ok) {
                    setTimeout(2000);
                    console.log("response::", response)
                    const data = await response.json();
                    console.log(data);
                    tempCategoryList.push(data);
                    setTimeout(2000);
                } else {
                    console.log("Sorry you got a bad response!!!");
                    console.log("response::", response)
                };
            }
        }
        fetchCategories();
        setCategoryList(tempCategoryList);
    }, []);

    // const fetchCategories = async() => {
    //     for (let i = 0; i < urlNumsList.length; i++) {
    //         const response = await fetch (`https://jservice.io/api/category?id=${urlNumsList[i]}`)
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);
    //             functionList[i](data);
    //         } else {
    //             console.log("PROBLEMS!");
    //         };
    //     };
    // };

    // const fetchCategories = async() => {
    //     const fullUrl1 = `http://jservice.io/api/category?id=${url1}`;
    //     const fullUrl2 = `http://jservice.io/api/category?id=${url2}`;
    //     const fullUrl3 = `http://jservice.io/api/category?id=${url3}`;
    //     const fullUrl4 = `http://jservice.io/api/category?id=${url4}`;
    //     const fullUrl5 = `http://jservice.io/api/category?id=${url5}`;
    //     const fullUrl6 = `http://jservice.io/api/category?id=${url6}`;
    //     const fetchParameters = {
    //         // method: 'GET',
    //         // mode: 'cors',
    //         // credentials: 'same-origin',
    //         // // referrerPolicy: 'strict-origin-when-cross-origin'
    //         // // headers: {
    //         // //     // 'origin': '',
    //         // // },
    //     };
    //     const response1 = await fetch(fullUrl1, fetchParameters);
    //     const response2 = await fetch(fullUrl2, fetchParameters);
    //     const response3 = await fetch(fullUrl3, fetchParameters);
    //     const response4 = await fetch(fullUrl4, fetchParameters);
    //     const response5 = await fetch(fullUrl5, fetchParameters);
    //     const response6 = await fetch(fullUrl6, fetchParameters);
    //     if (
    //         response1.ok &&
    //         response2.ok &&
    //         response3.ok &&
    //         response4.ok &&
    //         response5.ok &&
    //         response6.ok
    //     ) {
    //         const data1 = await response1.json();
    //         const data2 = await response2.json();
    //         const data3 = await response3.json();
    //         const data4 = await response4.json();
    //         const data5 = await response5.json();
    //         const data6 = await response6.json();
    //         setCategory1(data1);
    //         setCategory2(data2);
    //         setCategory3(data3);
    //         setCategory4(data4);
    //         setCategory5(data5);
    //         setCategory6(data6);
    //     }
    // };

    // useEffect(() => {
    //     fetchCategories();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

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
                    // category1={category1}
                    // category2={category2}
                    // category3={category3}
                    // category4={category4}
                    // category5={category5}
                    // category6={category6}
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
