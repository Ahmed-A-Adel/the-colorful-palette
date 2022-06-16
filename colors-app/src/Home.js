import React from "react";
import { useParams, Link } from "react-router-dom";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";
import Palette from "./Palette";

function Home() {
  const { id } = useParams();
  return (
    <div className="home">
      {seedColors.map((palette) => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
}

export default Home;
