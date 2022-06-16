import React from "react";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";
import Palette from "./Palette";

function Home() {
  const { id } = useParams();
  return (
    <div className="home">
      <Palette
        palette={generatePalette(
          seedColors.find((palette) => palette.id === id)
        )}
      />
    </div>
  );
}

export default Home;
