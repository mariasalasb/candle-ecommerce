import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Item } from '../ItemListContainer/Item'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
        const {detailId}=useParams()

        const[itemDet, setItemDet]=useState([])

        useEffect(() => {
            try{
                setItemDet(Item.filter(i=>i.id===detailId))
            } catch(error){
                console.log(error)
            }
        }, [])
            
          return (
              <ItemDetail item={itemDet}/>
          )
}

export default ItemDetailContainer