import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
export class Palette extends Component {
  render() {
    const ColorBoxs = this.props.colors.map((color) => (
      <ColorBox name={color.name} background={color.color} />
    ));
    return (
      <div className="palette">
        {/* Navbar here */}
        <div className="palette-colors">{ColorBoxs}</div>
        {/* Footer should be here */}
      </div>
    );
  }
}

export default Palette;
