import React, { Component } from "react";
import "./ColorBox.css";
export class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div className="colorBox" style={{ background }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn">copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    );
  }
}

export default ColorBox;
