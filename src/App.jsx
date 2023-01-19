import React, {useEffect, useState} from "react";
import {Card, Button, Container, Row, Col} from "react-bootstrap";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjY5N2ZjMjk3ZmNkMDA1ZWU2NzEzOGUiLCJpYXQiOjE2NzQwNjk5ODUsImV4cCI6MTcwNTYwNTk4NX0.C7eB9ZV3M9vm5I2nO5w43Au5Q8UnjeAg6uLhP3O6fjY";

const MyCard = (props) => {
    return <Card>
        <Card.Img src={props.pic} className="w-auto"></Card.Img>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.txt.slice(0, 11)}...</Card.Text>
            <Button>Click</Button>
        </Card.Body>
    </Card>
}


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
                // console.log(data);
                setGoods(data.products);
            })
    });
    return <>
        <header className="container-fluid">header</header>
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
                <Row>
                    <Col xs={12}><h1>React page</h1></Col>
                    {goods.map(el => <Col xs={6} sm={4} md={3} key={el._id}>
                        <MyCard name={el.name} txt={el.description} pic={el.pictures}/>
                    </Col>)}
                    {/* <Col xs={6} sm={4} md={3}>
                        <MyCard name="1" txt="11111"/>
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                        <MyCard name="2" txt="ldfldfldf"/>
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                        <MyCard name="Три" txt="oloolo"/>
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                        <MyCard name="^_^" txt="@@@@"/>
                    </Col> */}
                </Row>
            </Container>

        </main>
        <footer className="container-fluid">footer</footer>
    </>
}
