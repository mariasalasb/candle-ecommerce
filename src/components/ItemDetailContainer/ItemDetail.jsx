import React from 'react'
import {Container,Row,Col} from "reactstrap";
import { Item } from '../ItemListContainer/Item'
import './ItemDetail.css'


function ItemDetail({i}) {
    return (
        <Container className="contenedor_detalle">
            <Row>
                <Col xs={12} lg={6} className="imagen_detalle_producto">
                    <img src={Item[0].image} alt=""/>
                </Col>
                <Col xs={12} lg={6}>
                    <h2>{Item[0].name}</h2> <br></br>
                    <p>{Item[0].description}</p><br></br>
                    <p>{Item[0].price} ARS</p><br></br>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail

