import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";
import Navbar from "./Navbar";
export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }
  changeLevel(level) {
    this.setState({
      level,
    });
  }
  handleFormatChange(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors } = this.props.pallete;
    const { level, format } = this.state;
    const ColorBoxs = colors[level].map((color) => (
      <ColorBox name={color.name} background={color[format]} />
    ));
    return (
      <div className="palette">
        {/* Navbar here */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="palette-colors">{ColorBoxs}</div>
        {/* Footer should be here */}
      </div>
    );
  }
}

export default Palette;
