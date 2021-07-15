import React, { Component } from 'react'
import {MenuItems} from "./MenuItem"
import {Button} from "../Button/Button"
import {CartWidget} from "../CartWidget/CartWidget"
import './NavBar.css'

class NavBar extends Component{
    state= { clicked: false }

    handleClick=() =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className="NavBarItems">
                <h1 className="navbar-logo">Candle<i className="fab fa-gripfire"></i> </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :  'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <CartWidget onClick={this.handleClick}></CartWidget>
            </nav>
        )
    }
}

export default NavBar