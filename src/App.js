import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react";
import Home from "./Home.js";
import seedColors from "./seedColors.js";
import ShowPalette from "./ShowPalette.js";
import SingleColorPalette from "./SingleColorPalette.js";
import NewPaletteForm from "./NewPaletteForm.js";
import bg from "./styles/bg.svg";
import "./App.css";
function App() {
  const [usePalettes, setUsePalettes] = useState(
    JSON.parse(window.localStorage.getItem("palettes")) || seedColors
  );
  // ___________________________________________________________________
  const location = useLocation();

  // ___________________________________________________________________
  const AddNewPalette = (newPalette) => {
    const newPalettes = [...usePalettes, newPalette];
    setUsePalettes(newPalettes);
    syncLocalStorage(newPalettes);
  };

  // ___________________________________________________________________
  const deletePalette = (e, id) => {
    e.stopPropagation();
    let newPalettes = usePalettes.filter((palette) => palette.id !== id);

    setUsePalettes(newPalettes);

    syncLocalStorage(newPalettes);
  };

  // ___________________________________________________________________
  const syncLocalStorage = (palettes) => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <TransitionGroup>
        <CSSTransition classNames="page" key={location.key} timeout={200}>
          <Routes location={location.pathname}>
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
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
