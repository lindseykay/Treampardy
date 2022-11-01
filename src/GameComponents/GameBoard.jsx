import React, { useState, useEffect } from "react"

export default function GameBoard() {


    let urlNumsList = [];
    while (urlNumsList.length < 6) {
        let urlNum = Math.floor(Math.random() * 27723 + 1);
        if (!urlNumsList.includes(urlNum)) {
            urlNumsList.push(urlNum);
        }
    }
    const [url1, url2, url3, url4, url5, url6] = urlNumsList;

    const [category1, setCategory1] = useState([])
    const [category2, setCategory2] = useState([])
    const [category3, setCategory3] = useState([])
    const [category4, setCategory4] = useState([])
    const [category5, setCategory5] = useState([])
    const [category6, setCategory6] = useState([])



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







    return (
        <>
            <div>
                <p>{category1.title}</p>
                {/* <p>{category2}</p>
                <p>{category3}</p>
                <p>{category4}</p>
                <p>{category5}</p>
                <p>{category6}</p> */}
            </div>
        </>
    )




}
