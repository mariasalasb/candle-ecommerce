import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import lights from './lights.jpg';

// const MyComponent=(props)=>{
//   useEffect(function(){},0)
//   useEffect(()=>{
//     return=>{
//       console.log('cleanup')
//     }
//   })

//   console.log('montar y renderizar mi componente')
//   console.log('renderizar componente')
//   return <>
//     <h1>Soy el componente My Component</h1>
//   </>
// }


function App() {
  const [state, setState] = useState(true) //funcion asincronica que recibe el estado inicial, devuelve un array cuya primera posicion es el estado en si mismo y la segunda es la funcion para cambiarlo ej: setState(false) lo cambiaria setState(!state)

  const cambiarEstado=()=>{
    setState(!state)
  }

  return (
    <div className="App">
     <NavBar />
     <ItemListContainer source={lights}></ItemListContainer >
     {/* <button onClick={()=>setState(!state)}>CLICK</button>

     <MyComponent prop={} estado/>
     <button onClick={cambiarEstado}>CAMBIAR ESTADO</button> */}
      {state ? <h1>TRUE</h1> : <h1>FALSE</h1>}

    </div>
  );
} 

export default  App;

