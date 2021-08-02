import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { Item } from './Item'
import {Row,Col} from "reactstrap";
import './ItemListContainer.css'


function ItemList() {
    const[itemList, setItemList]=useState([])
    const[loading,setLoading]=useState(true)

  useEffect(() => {
        setLoading(true)
        const task = new Promise ((resuelto, rechazado)=>{
          let status=200
          if(status===200){
            setTimeout(()=>{
              setLoading(false);
              resuelto(Item)},2000)
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
            {loading && 'CARGANDO..'}
            {!loading && itemList.map((item)=>{
                return(
                    <Col md={12} lg={4} key={item.id}>
                        <Link to={`/detail/${item.id}`}><img src={item.image}></img></Link>
                        <p>{item.name}</p>
                        <p>{item.price} ARS</p>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ItemList
