import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Home.js";
import seedColors from "./seedColors.js";
import ShowPalette from "./ShowPalette.js";
import MiniPalette from "./MiniPalette.js";
import SingleColorPalette from "./SingleColorPalette.js";

import NewPaletteForm from "./NewPaletteForm.js";
import { useState } from "react";

function App() {
  const [usePalettes, setUsePalettes] = useState(seedColors);
  const addNewPalette = (newPalette) => {
    setUsePalettes([...usePalettes, newPalette]);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home seedColors={usePalettes} />} />
        <Route
          path="/palette/newPalette"
          element={
            <NewPaletteForm
              addNewPalette={addNewPalette}
              palettes={usePalettes}
            />
          }
        />

        <Route
          path="/palette/:id"
          element={<ShowPalette seedColors={usePalettes} />}
        />
        <Route
          path="/palette/:id/:colorId"
          element={<SingleColorPalette seedColors={usePalettes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
