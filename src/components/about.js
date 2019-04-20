import React, { Component } from 'react';
import './components.css';
import {Drawer} from "antd";
import ReactMarkdown from "react-markdown";



class About extends Component {

  constructor(props){
    super(props);
    this.state = {
        visible: false,
        terms: null
    }
  }

  componentWillMount(){
    const readmePath = require("../blogs/aboutme.md");

    fetch(readmePath).then((response) => response.text()).then(text =>{
      this.setState({terms:text})
    })
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    //const {caption} = this.state;


    const pic = require("../pics/fancy_me.jpg");
    return (
        <div className="navItemContainer">
        <button className="smallName navitem" onClick={this.showDrawer}>
            About Me
        </button>
        <Drawer
          title="About Me"
          placement="left"
          closable={true}
          width = "55%"
          onClose={this.onClose}
          visible={this.state.visible}
         
        >
          <div className="blog">
            <div className="title">
                Hello there friend!
            </div>
            <img src={pic} className="picture"/>
            <div className="date"><i>Written by Bryan Moh || 24.3.2019</i></div>
            <ReactMarkdown source={this.state.terms} className="blogtext"/>
          </div>
        </Drawer>

        </div>
    )
  }
}

export default About;
