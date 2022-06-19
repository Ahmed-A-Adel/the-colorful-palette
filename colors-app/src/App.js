import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Home.js";
import ShowPalette from "./ShowPalette.js";
import MiniPalette from "./MiniPalette.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palette/:id" element={<ShowPalette />} />
      </Routes>
    </div>
  );
}

export default App;
