import React, { Component } from "react";
import "./components/components.css";
import "./App.css";
import Name from "./components/name";
import Nav from "./components/nav";
import { Spin } from "antd";
import MobileContext from './components/MobileContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      latest: null,
      allFiles:null,
      isMobile:false
    };
  }

  componentWillMount() {

    if (window.innerWidth< 1000){
      this.setMobile(true);
    }else{
      this.setMobile(false);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth< 1000){
        this.setMobile(true);
      }else{
        this.setMobile(false);
      }
    }, false);

    (async () => {
      /*const folderNames = ["About Me", "Cooked", "Places", "Code"];
      let newestPost = { newestName: null, newestDate: -1 };

      let i = 0;

      while (i < folderNames.length) {
        const dateString = await this.getLatestPostDate(folderNames[i]);
        const dateValue = await this.dateToValue(dateString);
        if (dateValue > newestPost.newestDate) {
          newestPost.newestName = folderNames[i];
          newestPost.newestDate = dateValue;
        }
        i++;
      }

      this.setLatest(newestPost.newestName);
      this.setLoading(false);*/

      //FIRST GET ALL FILES FROM SERVER
      const folderNames = ["About Me", "Cooked", "Places", "Code"];;
      let nameIterator = 0;
      let fileIterator = 0;
      let allFiles = {"About Me":[], "Cooked":[], "Places":[], "Code":[] };
      while(nameIterator<folderNames.length){
        fileIterator = 0;
        while(true){
          try{
            const blogPost = await this.grabFile(fileIterator,folderNames[nameIterator]);
            allFiles[folderNames[nameIterator]].push(blogPost);
            fileIterator++;
          }catch(e){
            break;
            //console.log(e);
          }
        }

        nameIterator++;
      }

      await this.storeAllFiles(allFiles);


      //THEN FIND WHEN THE LAST POST WAS

      let i = 0;
      let newestPost = { newestName: null, newestDate: -1 };

      while (i < folderNames.length) {
        const dateString = await this.getLastPostDate(folderNames[i]);
        const dateValue = await this.dateToValue(dateString);
        if (dateValue > newestPost.newestDate) {
          newestPost.newestName = folderNames[i];
          newestPost.newestDate = dateValue;
        }
        i++;
      }

      this.setLatest(newestPost.newestName);
      this.setLoading(false);

    })();
  }
  
  setMobile =  (isMobile) => {
    this.setState({isMobile:isMobile});
  }
  getLastPostDate =  async (folderName) => {

    const {allFiles} = this.state;

    const folderSize = allFiles[folderName].length;

    //if no files in folder
    if (folderSize === 0) {
      return "0.0.0";
    }

    const lastestInCategory = allFiles[folderName][folderSize-1];



    const date = await this.getDate(lastestInCategory);
    return date;
  }

  storeAllFiles =  (allFiles) => {
    this.setState({allFiles:allFiles});
  }

  setLoading = isLoading => {
    this.setState({ loading: isLoading });
  };

  setLatest = latest => {
    this.setState({ latest: latest });
  };

  getDate = text => {
    const lines = text.split("\n");
    let regex = /\((.*)\)\s*$/g;
    const date = lines[1]
      .match(regex)[0]
      .replace(/^\(/g, "")
      .replace(/\)\s*$/g, "");
    return date;
  };

  dateToValue = dateString => {
    const dayMonthYear = dateString.split(".");
    return (
      parseInt(dayMonthYear[2], 10) * 10000 +
      parseInt(dayMonthYear[1], 10) * 100 +
      parseInt(dayMonthYear[0], 10)
    );
  };

  grabFile = async (index, folderName) => {
    const Octokit = require("@octokit/rest");
    const octokit = new Octokit({
      userAgent: "octokit/rest.js v16.25.0",
      auth: "99eece022093681ddd1f31f2e2cf341bdd5061a2"
    });
    const stuff = await octokit.repos.getContents({
      owner: "Brymo",
      repo: "bry",
      path: `./src/blogs/${folderName}${index}.md`
    });
    const content = await Buffer.from(stuff.data.content, "Base64").toString();
    return content;
  };

  

  render() {
    //const {caption} = this.state;
    const { loading, latest,allFiles,isMobile } = this.state;

    if (loading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <Spin size="large" />
        </div>
      );
    }


    return (
      <div className={"content" + (isMobile?" mobile":"")}>
        <Name />
        <MobileContext.Provider value={isMobile}>
          <Nav latestPost={latest} files={allFiles}/>
        </MobileContext.Provider>
      </div>
    );
  }
}

export default App;
