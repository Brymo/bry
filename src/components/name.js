import React, { Component } from 'react';
import './components.css';
import BBAR from './button_bar'

class Name extends Component {

  constructor(props){
    super(props);
  }

  render() {
    //const {caption} = this.state;\
    const today = new Date();
    const day = String(today.getDate());
    const month = String(today.getMonth()+1);
    const year = String(today.getFullYear());
    return (
      <div className="main">
      <div className="nameComponent">
        <div className="bigName">
            Bryan Moh
        </div>
        <div className="smallName">
            {`${day}.${month}.${year}`}
        </div>
      </div>
      <BBAR/>
      </div>
    )
  }
}

export default Name;
