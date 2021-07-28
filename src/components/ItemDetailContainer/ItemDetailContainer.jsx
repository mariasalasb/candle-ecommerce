import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Item } from '../ItemListContainer/Item'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
        const {detailId}=useParams()

        const[itemDet, setItemDet]=useState([])

        /*useEffect(() => {
              const task = new Promise ((resuelto, rechazado)=>{
                  setTimeout(()=>{resuelto(Item[0])},2000)
              })
              task
              .then((resp)=>setItem(resp))
              .catch(err=>{console.log('un error'); return err})
              }, [])*/
        
        useEffect(() => {
            try{
                setItemDet(Item.filter(i=>i.id===detailId))
            } catch(error){
                console.log(error)
            }
        }, [])
      
          console.log(itemDet)
      
          return (
              <ItemDetail item={itemDet}/>
          )
}

export default ItemDetailContainer