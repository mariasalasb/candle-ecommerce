import React , { Component } from "react";
import {Popover, PopoverHeader, PopoverBody } from "reactstrap";
import './CartWidget.css'

/* export const CartWidget = ({
    onClick,
}) => {
    
    return ( 
        <>
        <i className="fas fa-shopping-cart" onClick={onClick} id="carrito"></i>

        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="carrito"
          toggle={this.togglePopover}
        >
          <PopoverHeader>This is popover title</PopoverHeader>
          <PopoverBody>
            This is simple popover content
          </PopoverBody>
        </Popover>
        </>
    )
} */

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
        >
        <PopoverHeader>This is popover title</PopoverHeader>
        <PopoverBody>
            This is simple popover content
        </PopoverBody>
        </Popover>
      </>
    );
  }

export default CartWidget