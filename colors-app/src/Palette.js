import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";
import Navbar from "./Navbar";
export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({
      level,
    });
  }
  render() {
    const { colors } = this.props.pallete;
    const { level } = this.state;
    const ColorBoxs = colors[level].map((color) => (
      <ColorBox name={color.name} background={color.hex} />
    ));
    return (
      <div className="palette">
        {/* Navbar here */}
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="palette-colors">{ColorBoxs}</div>
        {/* Footer should be here */}
      </div>
    );
  }
}

export default Palette;
