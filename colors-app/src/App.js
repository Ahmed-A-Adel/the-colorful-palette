import Home from "./Home.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/palette/:id" element={<h1>One Palette </h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
