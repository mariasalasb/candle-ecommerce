import React , { Component , useState} from "react";
import {Popover, PopoverHeader, PopoverBody } from "reactstrap";
import CartItem from "./CartItem";
import './CartWidget.css'
import image1 from '../../assets/hersheys.png'

const cart=[
    {   
        id:1,
        image: image1,
        cantidad:1,
        nombre:'VELA HERSHEYS',
        init:1,
        stock:5
    }
]

function CartWidget({onClick}){
    const [popoverOpen,setpopover]=useState(false)

    const togglePopover=()=>{
        setpopover(!popoverOpen)
      }
    
    return(
      <>
        <i className="fas fa-shopping-cart" onClick={onClick} id="carrito"></i>
        <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target="carrito"
            toggle={togglePopover}
            className="contenido-carrito"
        >
            <PopoverBody>
                {
                    cart.map(cart=>(
                        <div key={cart.id}>
                            <CartItem stock={cart.stock} initial={cart.init} image={cart.image} nombre={cart.nombre} /> 
                        </div>
                    ))
                }
            </PopoverBody>
        </Popover>
      </>
    );
  }

export default CartWidget