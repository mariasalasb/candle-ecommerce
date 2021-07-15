import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const handleCount=(cant)=>{
  alert(`ud ha agreagado: ${cant}`)
}
function ItemListContainer({source}){
    return(
      <>
        <img src={source} alt="imagen de carrusel"></img>
        <div>
          <ItemCount stock={5} initial={1} onAdd={handleCount}/>
        </div>
      </>
    );
  }

export default ItemListContainer
