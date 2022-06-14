import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";
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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={this.changeLevel}
            step={100}
          />
        </div>
        <div className="palette-colors">{ColorBoxs}</div>
        {/* Footer should be here */}
      </div>
    );
  }
}

export default Palette;
