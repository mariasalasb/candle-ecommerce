import React, {useState} from 'react'
import {Container,Row,Col,Button} from "reactstrap";
import {Link} from 'react-router-dom'
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
                            <ItemCount stock={i.stock} item={i} childToParent={childToParent}/>
                        </Col>
                        </>
                )})}
            </Row>
        </Container>
    )
}

export default ItemDetail

