import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './ItemListContainer.css'
import ItemList from './ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'



function ItemListContainer({source}){
  /* const[pokeList, setPokeList]=useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(data=>data.json())
    .then(res=> setPokeList(res))
  
  }, [])
  
  console.log(pokeList) */

      const {categoryId} = useParams()
      console.log(categoryId)
      return(
      <>
        <img src={source} alt="imagen de carrusel" className="banner"></img>
        <ItemList/>
        <ItemDetailContainer/>
      </>
    );
  }

export default ItemListContainer
