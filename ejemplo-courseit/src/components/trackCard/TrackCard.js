import React, { Component } from "react";
import "./track-card.css";

export default class TrackCard extends Component {
  render() {
    return (
      <div className="track-card-container">
        <div>
          {this.props.open ? (
            <span>Inscripciones abiertas</span>
          ) : (
            <span>En curso</span>
          )}
          <div>{this.props.title}</div>
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
}
