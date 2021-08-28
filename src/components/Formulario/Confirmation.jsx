import React, {useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import './Formulario.css'

function Confirmation({style}) {
    //function Confirmation({orderId,style}) {
    const {orderId}=useContext(CartContext);
    //const {orderId}=useParams()

    
    

    return (
            <div className="section" style={style}>
                <h2 className="colu-12 texto">Tu pedido se realizó correctamente con el ID: {orderId}</h2>
                <Link to ='/'><button className="boton">Volver a la tienda</button></Link>
            </div>
    )
}

export default Confirmation
