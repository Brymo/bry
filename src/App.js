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
      const folderNames = ["About Me","Cooked","Places","Code"];
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

  grabFile =  async (index, folderName) => {
    const Octokit = require('@octokit/rest');
    const octokit = new Octokit();
    const stuff = await octokit.repos.getContents({
      owner:"Brymo",
      repo:"bry",
      path:`./src/blogs/${folderName}/${folderName}${index}.md`
    })
    const content = await Buffer.from(stuff.data.content,'Base64').toString();
    return content;
  }

  getLatestPostDate =  async (folderName) => {
    let i = 0;
    let grabbedText = null;
    let fileExists = true;

    //find the latest post in the folder
    while(fileExists === true){
      try {
        grabbedText = await this.grabFile(i, folderName);
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
    grabbedText = await this.grabFile(i-1,folderName);
    const date = await this.getDate(grabbedText);
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
