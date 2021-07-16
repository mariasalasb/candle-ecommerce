import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import image1 from './assets/lights.jpg'


function App() {
  const [state, setState] = useState(true) //funcion asincronica que recibe el estado inicial, devuelve un array cuya primera posicion es el estado en si mismo y la segunda es la funcion para cambiarlo ej: setState(false) lo cambiaria setState(!state)

  const cambiarEstado=()=>{
    setState(!state)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer source={image1}></ItemListContainer >
    </div>
  );
} 

export default  App;

