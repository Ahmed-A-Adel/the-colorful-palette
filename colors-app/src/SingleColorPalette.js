import React, { Component } from "react";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar.js";
import { useState } from "react";
import PaletteFooter from "./PaletteFooter.js";
let palette;
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

function SingleColorPalette() {
  const [format, setFormat] = useState("hex");
  const { id, colorId } = useParams();
  function changeFormat(e) {
    setFormat(e);
  }
  console.log(palette);
  return (
    <div className="palette">
      <Navbar handleFormatChange={changeFormat} shoeLevel={false} />
      <div className="palette-colors">
        {GatherShades(id, colorId).map((color) => (
          <ColorBox
            name={color.name}
            id={color.id}
            background={color[format]}
            showLink={false}
            key={color.name}
          />
        ))}
      </div>
      <PaletteFooter name={palette.name} emoji={palette.emoji} />
    </div>
  );
}

export default SingleColorPalette;
