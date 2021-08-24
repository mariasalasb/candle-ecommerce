import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col} from "reactstrap";
import { getFirestore } from '../../servicios/firebaseService'
import './ItemListContainer.css'

function ItemListTopSale() {
    const[itemList, setItemList]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(() => {
      const dbQuery=getFirestore()
      dbQuery.collection('items').where("topsale","==","SI").get()
      .then(resp=> setItemList(resp.docs.map(ite=>({...ite.data(), id: ite.id}),setLoading(false) )))
    }, [])

  console.log(itemList)

    return (
        <div className="topsale">
        <div className="section_title">TOP SALE</div>
        <div className="contenedor2">
            {loading && 'CARGANDO..'}
                {!loading && itemList.map((item)=>{
                    return(
                    <Link to={`/detail/${item.id}`}>
                        <div className="image_topsale">
                            <img src={item.image} alt={item.name} className="imagen_topsale"></img>
                            <div className="image_overlay overlay_topsale">
                            <div className="topsale_title">{item.name}</div>
                            </div>
                        </div>
                    </Link>
                    )
                })}
        </div>
        </div>
    )
}

export default ItemListTopSale
