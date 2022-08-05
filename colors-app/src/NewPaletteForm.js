import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import DraggableColorList from "./DraggableColorList";
import NewPaletteNav from "./NewPaletteNav";
import NewPaletteColorPicker from "./NewPaletteColorPicker";
const drawerWidth = 440;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
// __________________________________________________

export default function NewPaletteForm(props) {
  const [useColors, setUseColors] = useState(props.palettes[0].colors);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (name) => {
    setUseColors(useColors.filter((color) => color.name !== name));
    console.log("working");
  };

  // ______________________________________________________________

  return (
    <div className={classes.root}>
      <NewPaletteNav
        classes={classes}
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
