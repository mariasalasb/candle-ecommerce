import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore } from '../../servicios/firebaseService'

function ItemDetailContainer() {
        const {detailId}=useParams()

        const[itemDet, setItemDet]=useState([])

        useEffect(() => {
            /*try{
                setItemDet(Item.filter(i=>i.id===detailId))
            } catch(error){
                console.log(error)
            }*/
            const dbQuery=getFirestore()
            dbQuery.collection('items').doc(detailId).get()
            .then(resp=> setItemDet({id: resp.id, ...resp.data()}))
        }, [])

        /*"ObckBAsNyRe4RDkCyFqa" dbQuery.collection('items').get()
            .then(resp=> setItemDet(resp.docs.map(ite=>({...ite.data(), id: ite.id}) )))
        }, [])*/

            
        console.log(itemDet)
          return (
              <ItemDetail item={itemDet}/>
          )
}

export default ItemDetailContainer