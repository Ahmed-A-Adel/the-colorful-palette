import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  closeSnackbar() {
    this.setState({
      open: false,
    });
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormatChange(e.target.value);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <nav className="navbar">
        <div className="logo">
          <Link to="/">color picker</Link>
        </div>
        {this.props.showLevel && (
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
        )}
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">Hex: #fff </MenuItem>
            <MenuItem value="rgb">RGB: rgb(255,255,255) </MenuItem>
            <MenuItem value="rgba">RGBA: rgb(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          autoHideDuration={3000}
          open={this.state.open}
          message={
            <sapn id="message-id">
              Format Changed To:{" "}
              <span
                style={{ textTransform: "upperCase", letterSpacing: "1px" }}
              >
                {this.state.format}
              </span>
            </sapn>
          }
          ContentProps={{
            "aria-describedby": "messeage-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </nav>
    );
  }
}

export default Navbar;
