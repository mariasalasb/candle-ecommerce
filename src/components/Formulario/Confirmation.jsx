import React from 'react'
import { Link } from 'react-router-dom'

function Confirmation({orderId, style}) {
    return (
            <div className="section" style={style}>
                <h2 className="colu-12 texto">Tu pedido se realizó correctamente con el ID: {orderId}</h2>
                <Link to ='/'><button className="boton">Volver a la tienda</button></Link>
            </div>
    )
}

export default Confirmation
