import React, { Component } from 'react';
import './components.css';
import NavItem from './navItem.js'


class Nav extends Component {


  render() {
    
    const {latestPost,files} = this.props;
    


    return (
      <div className="nav">
        
        <NavItem category="About Me" drawTitle="About Me - A story about me "latestPost = {latestPost === "About Me"} files={files["About Me"]}/>
        <NavItem category="Cooked" drawTitle="Cooked - A story about food "latestPost = {latestPost === "Cooked"} files={files["Cooked"]}/>
        <NavItem category="Places" drawTitle="Places - And other spaces I've been "latestPost = {latestPost === "Places"} files={files["Places"]}/>
        <NavItem category="Code" drawTitle="Code - Things I've tinkered"latestPost = {latestPost === "Code"} files={files["Code"]}/>
        
      </div>
    )
  }
}

export default Nav;
