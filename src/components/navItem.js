import React, { Component } from "react";
import "./components.css";
import { Drawer, Spin } from "antd";
import ReactMarkdown from "react-markdown";
import DrawNav from "./draw_nav";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      terms: [],
      articleId: 0,
      loading: false
    };
  }

  format = text => {
    const lines = text.split("\n");
    let regex = /\((.*)\)\s*$/g;
    const title = lines[0].match(regex)[0].replace(/^\(/g,'').replace(/\)\s*$/g,'');
    const date = lines[1].match(regex)[0].replace(/^\(/g,'').replace(/\)\s*$/g,'');
    return { title: title, date: date, text: text };
  };

  componentWillMount() {
    this.startLoad();


    (async () => {
      let readmePath = null;
      let i = 0;
      let fileExists = true;
      let allBlogs = [];

      while (fileExists) {
        console.log(i);
        try {
          const grabbedtext = await this.grabFile(i);
          const formattedText = await this.format(grabbedtext);
          console.log(formattedText);
          allBlogs.push(formattedText);
          i++;
        } catch (e) {
          fileExists = false;
          //console.log(e);
        }
      }

      
      this.setState({ terms: allBlogs,articleId:i-1 });

      this.stopLoad();

    })();
  }

  grabFile =  async (index) => {
    const {category} = this.props;
    const Octokit = require('@octokit/rest');
    const octokit = new Octokit({userAgent:'Midnight Laundry'});
    const stuff = await octokit.repos.getContents({
      owner:"Brymo",
      repo:"bry",
      path:`./src/blogs/${category}${index}.md`
    })
    const content = await Buffer.from(stuff.data.content,'Base64').toString();
    return content;
  }

  noArticles = () => {
      this.setState({hasArticles:false});
  }

  startLoad = () => {
    this.setState({
      loading: true
    });
  };

  stopLoad = () => {
    this.setState({
      loading: false
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  nextArticle = () => {
    this.setState({
      articleId: this.state.articleId + 1
    });
  };

  prevArticle = () => {
    this.setState({
      articleId: this.state.articleId - 1
    });
  };

  getPrevNext = () => {
    const { terms, articleId } = this.state;
    const numArticles = terms.length;
    const prevNext = { prev: null, next: null };

    if (numArticles <= 1) {
      return prevNext;
    } else {
      if (articleId === 0) {
        prevNext.next = terms[1].title;
      } else if (articleId === numArticles - 1) {
        prevNext.prev = terms[numArticles - 2].title;
      } else {
        prevNext.next = terms[articleId + 1].title;
        prevNext.prev = terms[articleId - 1].title;
      }
    }

    return prevNext;
  };

  render() {
    const { terms, articleId, loading } = this.state;
    const {latestPost, drawTitle,category} = this.props;
    return (
      <div className="navItemContainer">
        <button className="smallName navitem" onClick={this.showDrawer}>
          {category}
          {latestPost?<sup>new</sup>:""}
        </button>
        <Drawer
          title={drawTitle}
          placement="left"
          closable={true}
          width="70%"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {loading ? (
            <div style={{ textAlign: "center" }}>
              <Spin size="large" />
            </div>
          ) : (
              
            <div className="blog">
              <DrawNav
                prevNext={this.getPrevNext()}
                nextArticle={this.nextArticle}
                prevArticle={this.prevArticle}
              />
              {articleId === 0 ?
              (<div><div className="title">{terms[articleId].title}</div>

              <div className="date">
                <i>Written by Bryan Moh || {terms[articleId].date}</i>
              </div>
              <ReactMarkdown
                source={terms[articleId].text}
                className="blogtext"
              />
            </div>):"No articles yet!"}
            </div>
          )}
          
        </Drawer>
      </div>
    );
  }
}

export default NavItem;