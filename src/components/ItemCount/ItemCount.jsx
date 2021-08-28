import React, {useState,useContext}  from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from "reactstrap";
import {CartContext} from '../../context/CartContext';
import '../CartWidget/CartWidget.css'

function ItemCount({stock,item}) {
    const {addToCart} = useContext(CartContext)

    const BotonCarrito =()=>{
        return<>
        <Button className='boton-de-pago' onClick={() => addToCart(item,cant, setBoton('Pagar'))  }>Agregar al carrito</Button>
        </>
    }

    const BotonPagar =()=>{
        return<>
        <Link to='/cart'><Button className='boton-de-pago' >Ir al carrito</Button></Link>
        </>
    }
    
    const [tipoBoton,setBoton]=useState('Carrito')
    const Bot = tipoBoton === 'Carrito' ? BotonCarrito : BotonPagar

    
    const [cant,setCantidad]=useState(1);
    const initial=1;
    
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
        <div className="botones_agregar_carrito">
            <Row>
                <Col className="button-operator "> 
                    <button onClick={handleRemove}>-</button>    
                </Col>
                <Col className="cantidad">
                    <p><span>{cant}</span></p>
                </Col>
                <Col className="button-operator button-plus">
                    <button onClick={handleAdd}>+</button>    
                </Col>
            </Row>
            <Row>
                <Bot/>
            </Row>
        </div>
    )
}

export default ItemCount