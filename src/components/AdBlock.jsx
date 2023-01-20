import React from "react";
import {Row, Col} from "react-bootstrap";

// props.text => text
const Block = ({pic, bg, caption, text}) => {
    let style = {
        backgroundImage: "url(https://abrakadabra.fun/uploads/posts/2022-01/1643130833_19-abrakadabra-fun-p-pattern-lapki-41.png)",
        backgroundSize: "auto 200%",
        backgroundColor: bg
    };
    return <Row style={style}>
        <Col xs={8}>
            <h3>{caption}</h3>
            <p>{text}</p>
        </Col>
        <Col xs={4}>
            <img src={pic} alt={caption} className="w-75"/>
        </Col>
    </Row>
}

export default Block;

const ads = ["https://avatars.mds.yandex.net/get-mpic/5268639/img_id2353893688558851266.png/orig", "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200", "https://ozerki.ru/er-pics/images/goods/90538/main"]



