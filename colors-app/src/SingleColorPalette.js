import React, { Component } from "react";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";
import ColorBox from "./ColorBox.js";
function gatherShades(paletteId, colorId) {
  const palette = generatePalette(
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
  const { id, colorId } = useParams();
  return (
    <div className="palette">
      <div className="palette-colors">
        {gatherShades(id, colorId).map((color) => (
          <ColorBox
            name={color.name}
            id={color.id}
            background={color.hex}
            showLink={false}
            key={color.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SingleColorPalette;
