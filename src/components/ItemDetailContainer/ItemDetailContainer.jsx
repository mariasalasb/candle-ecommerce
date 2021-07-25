import React, {useEffect, useState} from 'react'
import { Item } from '../ItemListContainer/Item'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
        const[itemDet, setItem]=useState([])

        useEffect(() => {
              const task = new Promise ((resuelto, rechazado)=>{
                  setTimeout(()=>{resuelto(Item[0])},2000)
              })
              task
              .then((resp)=>setItem(resp))
              .catch(err=>{console.log('un error'); return err})
              }, [])
      
          console.log(itemDet)
      
          return (
              <ItemDetail i={itemDet.id}/>
          )
}

export default ItemDetailContainer