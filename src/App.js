import React, { Component } from 'react';
import './components/components.css';
import './App.css'
import Name from './components/name'
import Nav from './components/nav'



class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    //const {caption} = this.state;
    return (
      <div className="content">
        <Name/>
        <Nav/>
      </div>
    )
  }
}

export default App;
