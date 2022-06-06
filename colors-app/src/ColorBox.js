import React, { Component } from "react";
import "./ColorBox.css";
export class ColorBox extends Component {
  render() {
    return (
      <div className="colorBox" style={{ background: this.props.color.color }}>
        <span>{this.props.color.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;
