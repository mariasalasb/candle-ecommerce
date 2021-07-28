import React from 'react'
import {Container,Row,Col} from "reactstrap";
/*import { Item } from '../ItemListContainer/Item'*/
import './ItemDetail.css'


function ItemDetail({item}) {
    return (
        <Container className="contenedor_detalle">
            <Row>
                {item.map((i)=>{
                    return(
                        <>
                        <Col xs={12} lg={6} className="imagen_detalle_producto">
                            <img src={i.image} alt={i.name}/>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h2>{i.name}</h2> <br></br>
                            <p>{i.description}</p><br></br>
                            <p>{i.price} ARS</p><br></br>
                        </Col>
                        </>
                )})}
            </Row>
        </Container>
    )
}

export default ItemDetail

