import React, { Component } from 'react';
import './components.css';
import {Button} from "antd"


class BBAR extends Component {


  render() {
    
    return (
      <div className="bbar">
       
        <a href="https://github.com/Brymo" target="_blank" rel="noopener noreferrer"><Button shape="circle" icon="github" className="button"/></a>
        
        <a href="https://www.linkedin.com/in/bryan-moh-a7b380170/" target="_blank" rel="noopener noreferrer"><Button shape="circle" icon="linkedin" className="button"/></a>
        
        <a href="https://www.facebook.com/bryan.moh.92" target="_blank" rel="noopener noreferrer"><Button shape="circle" icon="facebook" className="button"/></a>
      </div>
    )
  }
}

export default BBAR;