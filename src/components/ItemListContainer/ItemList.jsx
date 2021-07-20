import React,{useEffect,useState} from 'react'
import { Item } from './Item'
import {Row,Col} from "reactstrap";
import './ItemListContainer.css'


function ItemList() {
    const[itemList, setItemList]=useState([])

  useEffect(() => {
        const task = new Promise ((resuelto, rechazado)=>{
          let status=200
          if(status===200){
            setTimeout(()=>{resuelto(Item)},2000)
            }
          else{
            rechazado('NO OK')
          }
        })
        task
        .then((resp)=>setItemList(resp))
        .catch(err=>{console.log('un error'); return err})
        }, [])

    console.log(itemList)

    return (
        <Row>
            {itemList.map((item)=>{
                return(
                    <Col md={12} lg={4} key={item.id}>
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                        <p>{item.price} ARS</p>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ItemList
