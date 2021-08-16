import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col} from "reactstrap";
import { getFirestore } from '../../servicios/firebaseService'
import './ItemListContainer.css'


function ItemList() {
    const[itemList, setItemList]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(() => {
      const dbQuery=getFirestore()
      dbQuery.collection('items').get()
      .then(resp=> setItemList(resp.docs.map(ite=>({...ite.data(), id: ite.id}),setLoading(false) )))
  }, [])

  console.log(itemList)

    return (
        <Row>
            {loading && 'CARGANDO..'}
            {!loading && itemList.map((item)=>{
                return(
                    <Col md={12} lg={4} key={item.id}>
                        <Link to={`/detail/${item.id}`}><img src={item.image} alt={item.name}></img></Link>
                        <p>{item.name}</p>
                        <p>{item.price} ARS</p>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ItemList
