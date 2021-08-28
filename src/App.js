import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Container} from "reactstrap";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import  {CartProvider} from './context/CartContext';
import Formulario from './components/Formulario/Formulario';
import Cart from './components/CartWidget/Cart';
import Confirmation from './components/Formulario/Confirmation';
import ItemList from './components/ItemListContainer/ItemList';

function App() {

  return (
    <div className="App">
      <Router>
      <CartProvider>
           <NavBar /> 
        <Switch>
          <Container fluid>
              <Route exact path="/" component={ItemListContainer}/> 
              <Route exact path='/category/:category' component={ItemList}/>
              <Route exact path= '/detail/:detailId' component={ItemDetailContainer}/>
              <Route exact path='/cart' component={Cart}/>
              <Route exact path='/confirmation/:orderId' component={Confirmation}/>
              </Container>
            </Switch>
        </CartProvider>
      </Router>
    </div>
  );
} 

export default  App;

