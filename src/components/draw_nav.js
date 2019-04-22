import React from "react";
import "./components.css";

;

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
