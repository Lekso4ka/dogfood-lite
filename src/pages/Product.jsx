import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Col, Row, Button, Image, ButtonGroup, Alert, Badge, Table } from "react-bootstrap";

const Product = ({token}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://api.react-learning.ru/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setProduct(data)
                }
            })
    }, [])
    return <Row>
        <Col xs={12}>
            <a href="">Назад</a>
        </Col>
        <Col xs={12}>
            {product.name && <h1>{product.name}</h1>}
        </Col>
        <Col xs={4}>
            {product.pictures && <Image src={product.pictures} alt="pic" className="w-100"/>}
        </Col>
        <Col xs={1}/>
        <Col xs={7}>
            {product.discount ?
                <>
                    {product.price && 
                        <>
                            <div><del><small>{product.price} ₽</small></del></div>
                            <div><strong className="text-danger">{product.price * (100 - product.discount) / 100} ₽</strong></div>
                        </>
                    }
                </> :
                <>
                    {product.price && <div><strong>{product.price} ₽</strong></div>}
                </>
            }
        </Col>
    </Row>
}

export default Product;