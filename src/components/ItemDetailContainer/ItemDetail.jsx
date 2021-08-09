import React, {useState} from 'react'
import {Container,Row,Col} from "reactstrap";
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import '../CartWidget/CartWidget.css'




function ItemDetail({item}) {

    const [cantidadComprar, setCantidadComprar] = useState();

    const childToParent = (childdata) => {
        setCantidadComprar(childdata);
    }

    return (
        <Container className="contenedor_detalle">
            <Row>
                <Col xs={12} lg={6} className="imagen_detalle_producto">
                    <img src={item.image} alt={item.name}/>
                </Col>
                <Col xs={12} lg={6}>
                    <h2>{item.name}</h2> <br></br>
                    <p>{item.description}</p><br></br>
                    <p>{item.price} ARS</p><br></br>
                    <ItemCount stock={item.stock} item={item} childToParent={childToParent}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail

