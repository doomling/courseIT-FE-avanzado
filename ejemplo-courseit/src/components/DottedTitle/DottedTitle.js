import React from "react";
import "./dotted-title.css";

class DottedTitle extends React.Component {
  render() {
    return (
      <div className="title-container">
        <h4>{this.props.title}</h4>
        <div className="dotted-content" />
      </div>
    );
  }
}

export default DottedTitle;
