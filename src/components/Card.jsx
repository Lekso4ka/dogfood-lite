import React from "react";
import {Card, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const MyCard = (props) => {
    const navigate = useNavigate();

    const handler = () => {
        console.log(props);
        navigate(`/product/${props._id}`);
    }

    return <Card onClick={handler}>
        <Card.Img src={props.pictures} className="w-auto"></Card.Img>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description.slice(0, 11)}...</Card.Text>
            <Button>Click</Button>
        </Card.Body>
    </Card>
}

export default MyCard;