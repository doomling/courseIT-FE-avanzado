import React from "react";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="button">{this.props.title}</div>;
  }
}

export default Button;
