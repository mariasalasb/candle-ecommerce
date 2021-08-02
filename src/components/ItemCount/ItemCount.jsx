import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from "reactstrap";
import '../CartWidget/CartWidget.css'

function ItemCount({stock, childToParent}) {

    const BotonPagar =()=>{
        return<>
        <Link to='/cart'><Button className='boton-de-pago' >Terminar mi compra</Button></Link>
        </>
    }
    const BotonCarrito =()=>{
        return<>
        <Button className='boton-de-pago'  onClick={() => childToParent({cant}, setBoton('Pagar'))}>Agregar al carrito</Button>
        </>
    }

    const [tipoBoton,setBoton]=useState('Carrito')
    const [cantidadComprar,setCantidadComprar]=useState()
    const Bot = tipoBoton === 'Carrito' ? BotonCarrito : BotonPagar

    
    const [cant,setCantidad]=useState(1)
    const[initial,setInitial]=useState(1)
    
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
    
    return (
        <Container>
            <Row>
                <p><span>{cant}</span></p>
            </Row>
            <Row>
                <Col className="button-operator button-plus"> 
                    <button onClick={handleRemove}>-</button>    
                </Col>
                <Col className="button-operator">
                    <button onClick={handleAdd}>+</button>    
                </Col>
            </Row>
            <Row>
                <Bot/>
            </Row>
        </Container>
    )
}

export default ItemCount