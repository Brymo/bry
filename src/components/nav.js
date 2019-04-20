import React, { Component } from 'react';
import './components.css';
import About from "./about"
import Cooked from "./cooked"

class Nav extends Component {

  constructor(props){
    super(props);
  }

  render() {

    //const {caption} = this.state;
    return (
      <div className="nav">
        <About/>
        <Cooked/>
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
