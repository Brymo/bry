import React, { Component } from 'react';
import './components/components.css';
import './App.css'
import Name from './components/name'
import Nav from './components/nav'
import { Spin } from "antd";



class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      loading:true,
      latest:null
    }
  }

  componentWillMount(){
        
    (async () => {
      const folderNames = ["aboutme","cooked","places","code"];
      let newestPost = {newestName:null, newestDate:-1};

      let i = 0;
      

      while(i < folderNames.length){
        const dateString = await this.getLatestPostDate(folderNames[i]);
        const dateValue = await this.dateToValue(dateString);
        if (dateValue > newestPost.newestDate){
          newestPost.newestName = folderNames[i];
          newestPost.newestDate = dateValue;
        }
        i++;
      }
      

      this.setLatest(newestPost.newestName);
      this.setLoading(false);

    })()



  }

  setLoading = (isLoading) => {
    this.setState({loading:isLoading});
  }

  setLatest = (latest) => {
    this.setState({latest:latest});
  }

  getDate = text => {
    const lines = text.split("\n");
    let regex = /\((.*)\)\s*$/g;
    const date = lines[1].match(regex)[0].replace(/^\(/g,'').replace(/\)\s*$/g,'');
    return date;
  };

  dateToValue =  (dateString) => {
    const dayMonthYear = dateString.split(".");
    return parseInt(dayMonthYear[2],10)*10000 + parseInt(dayMonthYear[1],10) * 100 + parseInt(dayMonthYear[0],10)
  }

  getLatestPostDate =  async (folderName) => {
    let i = 0;
    let readmePath = null;
    let fileExists = true;

    //find the latest post in the folder
    while(fileExists === true){
      try {
        readmePath = require(`./blogs/${folderName}/${folderName}${i}.md`);
        fetch(readmePath)
        i++;
      } catch (e) {
        fileExists = false;
      }
    }

    //if no files in folder
    if(i === 0){
      return "0.0.0";
    }

    //fetch date from latest file
    readmePath = await require(`./blogs/${folderName}/${folderName}${i-1}.md`);
    const data = await fetch(readmePath);
    const text = await data.text();
    const date = await this.getDate(text);
    return date;

  }

  render() {
    //const {caption} = this.state;
    const {loading,latest} = this.state;

    if(loading){
      return(
      <div style={{ textAlign: "center" }}>
        <Spin size="large" />
      </div>)
    }

    console.log(latest);
      
    return (
      <div className="content">
        <Name/>
        <Nav latestPost={latest}/>
      </div>
    )
    
  }
}

export default App;
