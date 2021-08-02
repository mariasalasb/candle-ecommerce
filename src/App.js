import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import image1 from './assets/lights.jpg'
import {Container} from "reactstrap";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {

  function onkeydown(e){
    e.key==='a' ? e.preventDefault() : console.log(e)
  }

  return (
    <div className="App">
      <Router>
           <NavBar /> {/*va fuera del switch porque permanece en / pero dentro del router porque necesitamos que tenga funcionalidad de navegacion*/}
        <Switch>
          {/*<input onKeyDown={onkeydown}></input>*/}
          <Container fluid>
              <Route exact path="/"> {/*exact path="/category/:categoryId" lo que va luego de : es parametro*/}
                <ItemListContainer source={image1} />
              </Route>
               <Route exact path= '/detail/:detailId' component={ItemDetailContainer}/>
          </Container>
        </Switch>
      </Router>
    </div>
  );
} 

export default  App;

