import React , {  useState} from "react";
import {Popover, PopoverBody } from "reactstrap";
import CartItem from "./CartItem";
import './CartWidget.css'

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
                <CartItem/>
            </PopoverBody>
        </Popover>
      </>
    );
  }

export default CartWidget