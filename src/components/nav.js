import React, { Component } from 'react';
import './components.css';
import About from "./about"
import Cooked from "./cooked"

class Nav extends Component {


  render() {
    
    const {latestPost} = this.props;
    return (
      <div className="nav">
        
        <About latestPost = {latestPost}/>
        <Cooked  latestPost = {latestPost}/>
        <div className="smallName navitem">
            PVCE
        </div>
        <div className="smallName navitem">
            Teaching
        </div>
        
      </div>
    )
  }
}

export default Nav;
