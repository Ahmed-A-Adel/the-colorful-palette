import Palette from "./Palette.js";
import seedColors from "./seedColors.js";
import { generatePallete } from "./colorHelpers.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette pallete={generatePallete(seedColors[4])} />
    </div>
  );
}

export default App;
