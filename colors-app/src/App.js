import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Home.js";
import seedColors from "./seedColors.js";
import ShowPalette from "./ShowPalette.js";
import SingleColorPalette from "./SingleColorPalette.js";

import NewPaletteForm from "./NewPaletteForm.js";
import { useState } from "react";

function App() {
  const [usePalettes, setUsePalettes] = useState(
    JSON.parse(window.localStorage.getItem("palettes")) || seedColors
  );
  const AddNewPalette = (newPalette) => {
    const newPalettes = [...usePalettes, newPalette];
    setUsePalettes(newPalettes);
    syncLocalStorage(newPalettes);
  };
  function deletePalette(e, id) {
    e.stopPropagation();
    let newPalettes = usePalettes.filter((palette) => palette.id !== id);

    setUsePalettes(newPalettes);

    syncLocalStorage(newPalettes);
  }
  const syncLocalStorage = (palettes) => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home deletePalette={deletePalette} seedColors={usePalettes} />
          }
        />
        <Route
          path="/palette/newPalette"
          element={
            <NewPaletteForm
              addNewPalette={AddNewPalette}
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
