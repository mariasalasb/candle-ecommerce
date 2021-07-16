import React, {useState}  from 'react'
import {Container,Row,Col,Button} from "reactstrap";
import './CartWidget.css'

function CartItem({initial,stock,image,nombre}) {
    
    const [cant,setCantidad]=useState(1)

    const handleAdd=()=>{
        if(cant<stock){
            setCantidad(cant+1)
        }
    }
    const handleRemove=()=>{
        if(cant>initial){
            setCantidad(cant-1)
        }
    }
     const handleCount=()=>{
        alert(`Estás por pagar: ${cant} ${nombre}`)
    }

    return (
        <Container>
            <Row>
                <Col>            
                    <img src={image} alt="mini imagen producto" className="imagen-producto-mini" />
                </Col>
                <Col>
                    <Row>
                        <p><span>{cant}</span> {nombre}</p>
                    </Row>
                    <Row>
                        <Col className="button-operator button-plus"> 
                            <button onClick={handleRemove}>-</button>    
                        </Col>
                        <Col className="button-operator">
                            <button onClick={handleAdd}>+</button>    
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Button className="boton-de-pago" onClick={handleCount} >PAGAR</Button>
            </Row>
        </Container>
    )
}

export default CartItem
