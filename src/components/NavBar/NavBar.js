import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'
import {MenuItems} from "./MenuItem"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

class NavBar extends Component{
    state= { clicked: false }

    handleClick=() =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className="NavBarItems">
                <Link to='/'><h1 className="navbar-logo">Candle<i className="fab fa-gripfire"></i> </h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :  'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={item.url}  className={item.cName} exact activeClassName='nav-links-active'>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                    <CartWidget onClick={this.handleClick}></CartWidget>
                </ul>
            </nav>
        )
    }
}

export default NavBar