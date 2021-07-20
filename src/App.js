import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import image1 from './assets/lights.jpg'
import {Container} from "reactstrap";



function App() {

  return (
    <div className="App">
      <Container fluid>
          <NavBar />
          <ItemListContainer source={image1}></ItemListContainer >
      </Container>
    </div>
  );
} 

export default  App;

