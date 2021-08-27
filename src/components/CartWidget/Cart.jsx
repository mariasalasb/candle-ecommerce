import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import Formulario from '../Formulario/Formulario';
import './CartWidget.css'


function Cart() {
    const {cart,removeItem,price}=useContext(CartContext);

    /*const datos = [{
        name: 'Maria',
        phone: '1144483731',
        mail: 'mm@mail.com'
    }]*/
    const BotonCarrito =()=>{
        return<>
        <button className='boton-de-pago' onClick={() =>  setBoton('Pagar') }>Finalizar Compra</button>
        </>
    }
    
    const BotonPagar =()=>{
        return<>
          <Formulario  />
        </>
    }
    
    const [tipoBoton,setBoton]=useState('Carrito')
    const Bot = tipoBoton === 'Carrito' ? BotonCarrito : BotonPagar

    return (
        <>
        <h1>Resumen de compra</h1> 
            
            {cart.length!==0 && 
            <div className="section" >
                {cart.map(i =>
                    <div key={i.item.id} className="grilla">
                        <img src={i.item.image} className="imagen_resumen" alt={i.item.name}></img>
                        <p className="nombre_producto">{i.item.name} </p>
                        <p className="cantidad_producto">{i.quantity} x</p>
                        <p className="texto_producto">{(i.quantity)*(i.item.price)} ARS</p>
                        <i class="fas fa-trash-alt trash_producto" onClick={() => removeItem(i.item.id)}></i>                
                    </div>)}
                <div className="grilla">
                    <h2 className=" total">Total:</h2>
                    <h2 className=" price">{price()}</h2>
                </div>
                <>
                    <Bot />
                </>
            </div> }

            {cart.length===0 && <div className="section" >
            <h2 className="colu-12 texto">No hay ítems en tu carrito</h2>
            <Link to ='/'><button className="boton">Volver a la tienda</button></Link>
        </div> }

        </>
    )
}

export default Cart
