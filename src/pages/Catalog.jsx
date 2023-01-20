import React from "react";
import {Row, Col} from "react-bootstrap";
import MyCard from "../components/Card";

const Catalog = ({goods}) => {
    return <Row>
        <Col xs={12}><h1>Каталог товаров</h1></Col>
        {goods.map(el => <Col xs={6} sm={4} md={3} key={el._id}>
            <MyCard name={el.name} txt={el.description} pic={el.pictures}/>
        </Col>)}
    </Row>
}

export default Catalog;