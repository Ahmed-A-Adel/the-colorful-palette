import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <nav className="navbar">
        <div className="logo">
          <a href="#">color picker</a>
        </div>
        <div className="slider-container">
          <span>level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">Hex: #fff </MenuItem>
            <MenuItem value="rgb">RGB: rgb(255,255,255) </MenuItem>
            <MenuItem value="rgba">RGBA: rgb(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}

export default Navbar;
