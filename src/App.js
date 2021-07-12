import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import lights from './lights.jpg';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer source={lights}>
     </ItemListContainer >
    </div>
  );
} 

export default  App;

