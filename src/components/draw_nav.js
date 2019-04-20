import React, { component } from "react";
import "./components.css";
import { configConsumerProps } from "antd/lib/config-provider";
import Nav from "./nav";

export default function DrawNav(props) {
  const { nextArticle, prevArticle, prevNext } = props;

  return (
    <div className="dNavContainer">
      {prevNext.next ? (
        <div className="alive item" onClick={nextArticle}>
          {`< ${prevNext.next}`}
        </div>
      ) : (
        <div className="item">More coming soon!</div>
      )}
      {prevNext.prev ? (
        <div className="alive item" onClick={prevArticle}>
          {`${prevNext.prev} >`}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
