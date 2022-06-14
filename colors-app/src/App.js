import Palette from "./Palette.js";
import seedColors from "./seedColors.js";
import { generatePallete } from "./colorHelpers.js";
import "./App.css";

function App() {
  console.log(generatePallete(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
