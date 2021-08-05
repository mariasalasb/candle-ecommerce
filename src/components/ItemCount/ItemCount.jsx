import React, {useState,useEffect,useContext}  from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from "reactstrap";
import {CartContext} from '../../context/CartContext';
import '../CartWidget/CartWidget.css'

//function ItemCount({stock, childToParent})

function ItemCount({stock,item}) {
    const {addToCart} = useContext(CartContext)

    const BotonCarrito =()=>{
        return<>
        <Button className='boton-de-pago' onClick={() => addToCart(item,cant, setBoton('Pagar'))  }>Agregar al carrito</Button>
        </>
    }

    const BotonPagar =()=>{
        return<>
        <Link to='/cart'><Button className='boton-de-pago' >Terminar mi compra</Button></Link>
        </>
    }
    
    const [tipoBoton,setBoton]=useState('Carrito')
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


/* import React, {useState,useEffect,useContext}  from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from "reactstrap";
import CartContext from '../../context/CartContext';
import '../CartWidget/CartWidget.css'

//function ItemCount({stock, childToParent})

function ItemCount({stock,item}) {

    const [cantidadCompra,setCantidadCompra] = useContext(CartContext);
    const[itemCompra, setItemCompra]=useContext(CartContext);
    const[cart,setCart]=useContext(CartContext);

    console.log(item)
 
    const BotonPagar =()=>{
        return<>
        <Link to='/cart'><Button className='boton-de-pago' >Terminar mi compra</Button></Link>
        </>
    }
    /* const BotonCarrito =()=>{
        return<>
        <Button className='boton-de-pago'  onClick={() => childToParent({cant}, setBoton('Pagar'))}>Agregar al carrito</Button>
        </>
    } 
    const handle=()=>{
        setCantidadCompra(cant);
        setItemCompra({item});
        //setCart([{item},{cant}])
        setBoton('Pagar')
    }
    
    const BotonCarrito =()=>{
        return<>
        <Button className='boton-de-pago' onClick={handle}>Agregar al carrito</Button>
        </>
    }

    const [tipoBoton,setBoton]=useState('Carrito')
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

export default ItemCount */