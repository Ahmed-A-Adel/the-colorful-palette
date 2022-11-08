import React, { Component } from "react";
import { useParams, Link } from "react-router-dom";
import { generatePalette } from "./colorHelpers.js";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar.js";
import { useState } from "react";
import PaletteFooter from "./PaletteFooter.js";

function SingleColorPalette({ seedColors }) {
  let palette;
  const [format, setFormat] = useState("hex");
  const { id, colorId } = useParams();
  function GatherShades(paletteId, colorId) {
    palette = generatePalette(
      seedColors.find((palette) => palette.id === paletteId)
    );
    let { colors } = palette;
    let shades = [];
    for (let color in colors) {
      shades.push(colors[color].find((color) => color.id === colorId));
    }
    const boxs = shades.slice(1);
    return boxs;
  }
  function changeFormat(e) {
    setFormat(e);
  }
  return (
    <div className="palette singleColorPalette">
      <Navbar handleFormatChange={changeFormat} shoeLevel={false} />
      <div className="palette-colors">
        {GatherShades(id, colorId).map((color) => (
          <ColorBox
            className="color-shades"
            name={color.name}
            id={color.id}
            background={color[format]}
            showLink={false}
            key={color.name}
          />
        ))}
        <div className="colorBox go-back">
          <Link
            to={`/the-colorful-palette/palette/${palette.id}`}
            className="back-btn"
          >
            go back
          </Link>
        </div>
      </div>
      <PaletteFooter name={palette.name} emoji={palette.emoji} />
    </div>
  );
}

export default SingleColorPalette;
