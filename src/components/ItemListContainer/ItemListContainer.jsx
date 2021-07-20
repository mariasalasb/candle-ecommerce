import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList';

function ItemListContainer({source}){
      return(
      <>
        <img src={source} alt="imagen de carrusel" className="banner"></img>
        <ItemList/>
      </>
    );
  }

export default ItemListContainer
