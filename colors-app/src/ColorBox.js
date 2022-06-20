import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./ColorBox.css";
export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState(
      {
        copied: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            copied: false,
          });
        }, 1500);
      }
    );
  }

  render() {
    const { name, background, colorId, paletteId, showLink } = this.props;
    const clickHandler = () => navigator.clipboard.writeText(background);

    const { copied } = this.state;

    return (
      <div
        className={`colorBox `}
        onClick={() => {
          this.changeCopyState();
          clickHandler();
        }}
        style={{ background }}
      >
        <div
          style={{ background }}
          className={`box-overlay ${copied && "show"}`}
        />
        <div className={`box-overlay_msg ${copied && "show"}`}>
          <h1>Copied</h1>
          <span className="box-overlay_background">{background}</span>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn">copy</button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="see-more">MORE</span>
          </Link>
        )}
      </div>
    );
  }
}

export default ColorBox;
