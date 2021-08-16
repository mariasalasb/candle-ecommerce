import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext';
import './CartWidget.css'

function CartItem() {
    const {cart}=useContext(CartContext);

    return (
        <>            
            {cart.length!==0 && <div className="section" >
                {cart.map(i =>
                    <div key={i.item.id} className="grilla">
                        <img src={i.item.image} className="imagen-producto-mini colu-5" alt={i.item.name}></img>
                        <p className="colu-2">{i.quantity} x</p>
                        <p className="colu-5">{i.item.name} </p>
                    </div>)}
                <Link to ='/cart'><button className="boton2">Ver Carrito</button></Link>
            </div> }

            {cart.length===0 && <div className="section" >
            <h2 className="colu-12 texto">No hay ítems en tu carrito</h2>
            <Link to ='/'><button className="boton2">Volver a la tienda</button></Link>
         </div> }

        </>
    )
}

export default CartItem
