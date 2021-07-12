import React from 'react'
import './CartWidget.css'

export const CartWidget = ({
    onClick,
}) => {
    
    return ( 
        <i className="fas fa-shopping-cart" onClick={onClick}></i>
    )
}