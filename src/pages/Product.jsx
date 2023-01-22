import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Col, Row, Button, Image, ButtonGroup, Alert, Badge, Table } from "react-bootstrap";
import {ChevronLeft, Plus, Dash, Heart, HeartFill, Truck, Award} from "react-bootstrap-icons";

const Product = ({token}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [cnt, setCnt] = useState(0);
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
    const navigate = useNavigate();

    const move = (e) => {
        e.preventDefault();
        navigate("/catalog");
    }

    return <Row className="my-4">
        <Col xs={12}>
            <a href="" onClick={move} className="text-decoration-none text-secondary text-small"><ChevronLeft/> Назад</a>
        </Col>
        <Col xs={12}>
            {product.name && <h1>{product.name}</h1>}
        </Col>
        <Col xs={5}>
            {product.discount > 0 && <Badge bg="danger">-{product.discount} %</Badge>}
            {product.pictures && <Image src={product.pictures} alt="pic" className="w-100"/>}
        </Col>
        <Col xs={1}/>
        <Col xs={6}>
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
            <Row className="gx-5 my-3">
                <Col xs={4}>
                    <ButtonGroup>
                        <Button variant="outline-secondary" disabled={cnt === 0} onClick={() => {setCnt(cnt - 1)}}><Dash/></Button>
                        <Button variant="secondary">{cnt}</Button>
                        <Button variant="outline-secondary" onClick={() => {setCnt(cnt + 1)}}><Plus/></Button>
                    </ButtonGroup>
                </Col>
                <Col xs={8}>
                    <Button variant={"warning"} className="w-100">В корзину</Button>
                </Col>
            </Row>
            <div className="text-secondary"><Heart/> В избранное</div>
            <Alert variant="secondary" className="my-2">
                <Row>
                    <Col xs={2} style={{fontSize: "2em"}}><Truck/></Col>
                    <Col xs={10}>
                        <h6 className="fw-bold">Доставка по всему Миру!</h6>
                        <p className="mt-3">Доставка курьером - <strong>от 399 ₽</strong></p>
                        <p className="mb-0">Доставка в пункт выдачи - <strong>от 199 ₽</strong></p>
                    </Col>
                </Row>
            </Alert>
            <Alert variant="secondary">
                <Row>
                    <Col xs={2} style={{fontSize: "2em"}}><Award/></Col>
                    <Col xs={10}>
                        <h6 className="fw-bold">Гарантия качества</h6>
                        <p className="mt-3 mb-0">Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды</p>
                    </Col>
                </Row>
            </Alert>
        </Col>
        <Col xs={12}>
            <h3>Описание</h3>
            {product.description && <p>{product.description}</p>}
        </Col>
        <Col xs={12}>
            <h3>Характеристики</h3>
            <Table>
                <tbody>
                    {product.wight && <tr>
                        <th>Вес</th>
                        <td>{product.wight}</td>
                    </tr>}
                    {product.price && <tr>
                        <th>Цена</th>
                        <td>{product.price} / 100 г</td>
                    </tr>}
                    {product.description && <tr>
                        <th>Польза</th>
                        <td>{product.description}</td>
                    </tr>}
                </tbody>
            </Table>
        </Col>
        <Col xs={12}>
            <h3>Отзывы</h3>
            {product.reviews && product.reviews.map(el => <div className="my-4" key={el._id}>
                {el.rating && <h5>{"★".repeat(el.rating)}{"☆".repeat(5 - el.rating)}</h5>}
                {el.text && <p className="my-2">{el.text}</p>}
                <div className="text-secondary text-small">{new Date(el.created_at).toLocaleString()}</div>
            </div>)}
        </Col>
    </Row>
}

export default Product;