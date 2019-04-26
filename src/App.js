import React, { Component } from "react";
import "./components/components.css";
import "./App.css";
import Name from "./components/name";
import Nav from "./components/nav";
import { Spin } from "antd";

class App extends Component {


  render() {

    const about = 0;
    const cooked = 0;
    const places = 1;
    const code = 0

    let latest = "";

    if (about){
      latest = "About Me";
    }

    if (cooked){
      latest = "Cooked";
    }

    if (places){
      latest = "Places";
    }

    if (code){
      latest = "Code";
    }

    return (
      <div className="content">
        <Name />
        <Nav latestPost={latest} />
      </div>
    );
  }
}

export default App;
