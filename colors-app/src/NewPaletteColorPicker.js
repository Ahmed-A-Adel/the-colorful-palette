import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function NewPaletteColorPicker(props) {
  const {
    classes,
    open,
    useColors,
    maxColors,
    setOpen,
    setUseColors,
    palettes,
  } = props;
  const [useColor, setUseColor] = useState("");
  const [useNewColorName, setUseNewColorName] = useState("");
  const [useColorError, setUseColorError] = useState(["", false]);
  const paletteIsFull = useColors.length >= maxColors;

  const handleChange = (e) => {
    setUseNewColorName(e.target.value);
  };
  // __________________________________________________

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // __________________________________________________
  const updateColor = (color) => {
    setUseColor(color.hex);
  };

  // __________________________________________________
  const addColor = (e) => {
    e.preventDefault();
    // ___________________________________________________
    if (useColor === "" || useNewColorName === "") {
      setUseColorError(["Please Pick A Color And A Name", true]);
      return null;
    }
    // ___________________________________________________
    const colors = useColors.map((color) => color.color);
    const names = useColors.map((color) => color.name.toLowerCase());

    if (
      colors.some((color) => color == useColor) ||
      names.some((name) => name == useNewColorName.toLowerCase())
    ) {
      setUseColorError(["The Color Or The Name Already Exiest", true]);
      return null;
    }
    // ___________________________________________________
    if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].some((num) =>
        useNewColorName.split("").includes(num)
      )
    ) {
      setUseColorError(["Write Only Text Please", true]);
      return null;
    }
    setUseColors([...useColors, { color: useColor, name: useNewColorName }]);
    setUseNewColorName("");
    setUseColorError(["", false]);
  };
  // ______________________________________________________________

  const clearPalette = () => {
    setUseColors([]);
  };
  // ______________________________________________________________
  const addRandomColor = () => {
    const colors = palettes.map((p) => p.colors).flat();
    const ranNum = Math.floor(Math.random() * colors.length);
    const ranColor = colors[ranNum];
    setUseColors([...useColors, ranColor]);
  };
  return (
    <div>
      {" "}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div className="btn-container">
          <Button variant="contained" color="secondary" onClick={clearPalette}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker color="gray" onChangeComplete={updateColor} />
        <form onSubmit={addColor}>
          <TextField
            error={useColorError[1]}
            helperText={useColorError[0]}
            id="standard-basic"
            type="text"
            value={useNewColorName}
            onChange={handleChange}
            label="New Color"
            name="color"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ background: paletteIsFull ? "gray" : useColor }}
            type={"submit"}
            disabled={paletteIsFull}
          >
            Add Color
          </Button>
        </form>
      </Drawer>
    </div>
  );
}

export default NewPaletteColorPicker;
