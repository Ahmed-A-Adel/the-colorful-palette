import Palette from "./Palette.js";
import seedColors from "./seedColors.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
