import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { Button, Link } from "@material-ui/core";
import DragableColorBox from "./DragableColorBox";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
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
  const [useColor, setUseColor] = useState("");
  const [useColors, setUseColors] = useState([
    { color: "gray", name: "blond" },
    { color: "green", name: "blue" },
  ]);
  const [useNewName, setUseNewName] = useState("");
  const [useError, setUseError] = useState(["", false]);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // __________________________________________________
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // __________________________________________________
  const handleChange = (e) => {
    setUseNewName(e.target.value);
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
    if (useColor === "" || useNewName === "") {
      setUseError(["Please Pick A Color And A Name", true]);
      return null;
    }
    // ___________________________________________________
    const colors = useColors.map((color) => color.color);
    const names = useColors.map((color) => color.name);

    if (
      !colors.every((color) => color !== useColor) ||
      !names.every((name) => name !== useNewName)
    ) {
      setUseError(["The Color Or The Name Already Exiest", true]);
      return null;
    }
    // ___________________________________________________
    if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].some((num) =>
        useNewName.split("").includes(num)
      )
    ) {
      setUseError(["Write Only Text Please", true]);
      return null;
    }
    setUseColors([...useColors, { color: useColor, name: useNewName }]);
    setUseNewName("");
    setUseError(["", false]);
  };
  // ___________________________________________________
  function HandleSubmit() {
    let name = "New Palette";
    const newPalette = {
      name,
      colors: useColors,
      id: name.toLowerCase().replace(" ", "-"),
    };
    return props.addNewPalette(newPalette);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>

          <NavLink to="/">
            <Button variant="contained" color="primary" onClick={HandleSubmit}>
              Save Your Palette
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
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
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker color="gray" onChangeComplete={updateColor} />
        <form onSubmit={addColor}>
          <TextField
            error={useError[1]}
            helperText={useError[0]}
            id="standard-basic"
            type="text"
            value={useNewName}
            onChange={handleChange}
            label="New Color"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ background: useColor }}
            type={"submit"}
          >
            Add Color
          </Button>
        </form>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {useColors.map((color) => (
          <DragableColorBox
            key={color.name}
            color={color.color}
            name={color.name}
          />
        ))}
      </main>
    </div>
  );
}
