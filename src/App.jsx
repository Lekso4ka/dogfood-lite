import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Header from "./components/Header";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjY5N2ZjMjk3ZmNkMDA1ZWU2NzEzOGUiLCJpYXQiOjE2NzQwNjk5ODUsImV4cCI6MTcwNTYwNTk4NX0.C7eB9ZV3M9vm5I2nO5w43Au5Q8UnjeAg6uLhP3O6fjY";

export default () => {
    const [goods, setGoods] = useState([]);
    useEffect(() => {
        fetch("https://api.react-learning.ru/products", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGoods(data.products);
            })
    }, []);
    return <>
        <Header/>
        <main>
            {/* 
                Col:
                    xs - сколько столбцов от 1 до 12 занимает элемент по ширине для мобильного устройства
                    sm - большой телефон или маленький планшет
                    md - планшет
                    xl - компьютер
                    xxl - увеличенный монитор
            */}
                
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog goods={goods}/>}/>
                    <Route path="/product/:id" element={<Product token={token}/>}/>
                </Routes>
            </Container>
        </main>
        <footer className="container-fluid d-flex align-items-center">
            <Container>
                ©2023 React Learning
            </Container>
        </footer>
    </>
}
