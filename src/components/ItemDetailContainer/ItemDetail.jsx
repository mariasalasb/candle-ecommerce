import React from 'react'
import {Container,Row,Col} from "reactstrap";
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemListTopSale from '../ItemListContainer/ItemListTopSale'
import '../CartWidget/CartWidget.css'




function ItemDetail({item}) {

    return (
        <>
        <Container className="contenedor_detalle">
            <Row>
                <Col xs={12} lg={6} className="detalle_producto">
                    <img src={item.image} alt={item.name} className="imagen_detalle"/>
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="nombre_producto">{item.name}</h3> <br></br>
                    <p>{item.description}</p><br/>
                    <p>{item.price} ARS</p><br/>
                    <ItemCount stock={item.stock} item={item} />
                </Col>
            </Row>
        </Container>
        <ItemListTopSale titulo='Podría interesarte!'/>
        </>
        
    )
}

export default ItemDetail

