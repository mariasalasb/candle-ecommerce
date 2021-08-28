import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Row,Col} from "reactstrap";
import { getFirestore } from '../../servicios/firebaseService'
import './ItemListContainer.css'


function ItemList() {
    const {category}=useParams()

    const[itemList, setItemList]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(() => {
      const dbQuery=getFirestore()
      dbQuery.collection('items').where("category","==",category).get()
      .then(resp=> setItemList(resp.docs.map(ite=>({...ite.data(), id: ite.id}),setLoading(false) )))
  }, [category])

    return (
        <Row className="catalogo">
            {loading && 'CARGANDO..'}
            {!loading && itemList.map((item)=>{
                return(
                    <Col md={12} lg={3} key={item.id}>
                        <Link to={`/detail/${item.id}`} >
                            <div className="overlay">
                                <img src={item.image} alt={item.name} className='imagen_catalogo'></img>
                            </div>
                        </Link>
                        <p>{item.name}</p>
                        <p>{item.price} ARS</p>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ItemList
