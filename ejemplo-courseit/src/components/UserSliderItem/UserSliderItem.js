import React, { Component } from "react";
import "./user-slider-item.css";

export default class UserSliderItem extends Component {
  render() {
    return (
      <div className="slider-container">
        <div>
          <img src={this.props.img} />
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
