import React from "react";
import { useParams, Link } from "react-router-dom";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";
import Palette from "./Palette";
import MiniPalette from "./MiniPalette.js";
function Home() {
  const { id } = useParams();
  return (
    <div className="home">
      {seedColors.map((palette) => (
        <MiniPalette {...palette} />
      ))}
    </div>
  );
}

export default Home;
