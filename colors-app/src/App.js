import Palette from "./Palette.js";
import seedColors from "./seedColors.js";
import { Routes, Route } from "react-router-dom";
import { generatePallete } from "./colorHelpers.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>All Palettes </h1>} />
        <Route path="/palette/:id" element={<h1>One Palette </h1>} />
      </Routes>
      {/* <Palette pallete={generatePallete(seedColors[4])} /> */}
    </div>
  );
}

export default App;
