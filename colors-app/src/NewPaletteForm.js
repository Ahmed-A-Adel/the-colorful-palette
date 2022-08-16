import React, { useState } from "react";
import clsx from "clsx";
import DraggableColorList from "./DraggableColorList";
import NewPaletteNav from "./NewPaletteNav";
import NewPaletteColorPicker from "./NewPaletteColorPicker";
import { useStyles } from "./styles/NewPaletteFormStyles";

// __________________________________________________

export default function NewPaletteForm(props) {
  const [useColors, setUseColors] = useState(props.palettes[0].colors);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (name) => {
    setUseColors(useColors.filter((color) => color.name !== name));
  };

  // ______________________________________________________________

  return (
    <div className={classes.root}>
      <NewPaletteNav
        classe={classes}
        palettes={props.palettes}
        addNewPalette={props.addNewPalette}
        useColors={useColors}
        setOpen={setOpen}
        open={open}
      />
      <NewPaletteColorPicker
        classes={classes}
        open={open}
        maxColors={props.maxColors}
        useColors={useColors}
        setOpen={setOpen}
        palettes={props.palettes}
        setUseColors={setUseColors}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <DraggableColorList
          items={useColors}
          setItems={setUseColors}
          handleClick={handleClick}
        />
      </main>
    </div>
  );
}
NewPaletteForm.defaultProps = {
  maxColors: 20,
};
