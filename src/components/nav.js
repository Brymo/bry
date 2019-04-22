import React, { Component } from 'react';
import './components.css';
import NavItem from './navItem.js'


class Nav extends Component {


  render() {
    
    const {latestPost} = this.props;
    return (
      <div className="nav">
        
        <NavItem category="About Me" drawTitle="About Me - A story about me "latestPost = {latestPost === "About Me"}/>
        <NavItem category="Cooked" drawTitle="Cooked - A story about food "latestPost = {latestPost === "Cooked"}/>
        <NavItem category="Places" drawTitle="Places - And other spaces I've been "latestPost = {latestPost === "Places"}/>
        <NavItem category="Code" drawTitle="Code - Things I've tinkered"latestPost = {latestPost === "Code"}/>
        
      </div>
    )
  }
}

export default Nav;
