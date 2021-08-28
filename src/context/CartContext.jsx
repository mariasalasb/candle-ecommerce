import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const removeItem = (idborrar)=>{
        const oldList= cart.filter(item=>item.item.id!==idborrar)
        setCart(oldList);
    }

    const price=()=>{
        return cart.reduce((acum,valor)=>(acum + (valor.quantity*valor.item.price)),0)
    }

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            let index = cart.findIndex((e) => e.item.id === item.id)
            const oldQt = cart[index].quantity
            cart.splice(index, 1)
            setCart([...cart, {'item': item , 'quantity': quantity + oldQt}])
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
        <CartContext.Provider value={{cart,setCart,addToCart, removeItem, price}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

/* import {createContext} from 'react'

const CartContext= createContext()

export default CartContext */
