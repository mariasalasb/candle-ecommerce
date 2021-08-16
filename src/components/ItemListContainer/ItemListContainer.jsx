import React from 'react'
import {useParams} from 'react-router-dom'
import './ItemListContainer.css'
import ItemList from './ItemList';



function ItemListContainer({source}){

      const {categoryId} = useParams()
      console.log(categoryId)
      return(
      <>
        <img src={source} alt="imagen de carrusel" className="banner"></img>
        <ItemList/>
      </>
    );
  }

export default ItemListContainer
