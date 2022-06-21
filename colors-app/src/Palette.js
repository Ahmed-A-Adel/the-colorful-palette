import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
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
    const { colors, name, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const ColorBoxs = colors[level].map((color) => (
      <ColorBox
        name={color.name}
        background={color[format]}
        colorId={color.id}
        paletteId={id}
        showLink
      />
    ));
    return (
      <div className="palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.handleFormatChange}
          showLevel
        />
        <div className="palette-colors">{ColorBoxs}</div>
        <PaletteFooter name={name} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
