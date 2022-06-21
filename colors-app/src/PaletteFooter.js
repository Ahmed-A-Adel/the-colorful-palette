import React from "react";

function PaletteFooter(props) {
  const { name, emoji } = props;
  return (
    <footer className="palette-footer">
      {name}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
