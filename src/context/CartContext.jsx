import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            quantity += quantity
            let index = cart.findIndex((e) => e.item.id === item.id)
            cart.splice(index, 1)
            setCart([...cart, {'item': item , 'quantity': quantity }])
            //console.log(getTotal)
        }else{
            setCart([...cart, {'item': item , 'quantity': quantity }])
        }
 }
    const isInCart = (id) => {
        return cart.find((item)=>{
            if(item.item.id !== id){
                return false
            }
            else{
                return item.item.id
            }
        })
    }
    return(
        <CartContext.Provider value={{addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

/* import {createContext} from 'react'

const CartContext= createContext()

export default CartContext */
