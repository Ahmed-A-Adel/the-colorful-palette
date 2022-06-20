import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Home.js";
import ShowPalette from "./ShowPalette.js";
import MiniPalette from "./MiniPalette.js";
import SingleColorPalette from "./SingleColorPalette.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palette/:id" element={<ShowPalette />} />
        <Route path="/palette/:id/:colorId" element={<SingleColorPalette />} />
      </Routes>
    </div>
  );
}

export default App;
