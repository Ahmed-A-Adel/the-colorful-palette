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
import { Button } from "@material-ui/core";
import DragableColorBox from "./DragableColorBox";
import TextField from "@material-ui/core/TextField";
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

export default function NewPaletteForm() {
  const [useColor, setUseColor] = useState("");
  const [useColors, setUseColors] = useState([
    { color: "gray", name: "blond" },
    { color: "green", name: "blue" },
  ]);
  const [useNewName, setUseNewName] = useState("");
  const [useError, setUseError] = useState("");
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleAddName = (e) => {
    setUseNewName(e.target.value);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const updateColor = (color) => {
    setUseColor(color.hex);
  };
  const addColor = (e) => {
    // __________________________________________________
    e.preventDefault();
    // ___________________________________________________
    if (useColor === "" || useNewName === "") {
      setUseError("Please Pick A Color And A Name");
      return null;
    }
    // ___________________________________________________
    const colors = useColors.map((color) => color.color);
    const names = useColors.map((color) => color.name);

    if (
      !colors.every((color) => color !== useColor) ||
      !names.every((name) => name !== useNewName)
    ) {
      setUseError("The Color Or The Name Already Exiest");
      return null;
    }
    // ___________________________________________________
    if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].some((num) =>
        useNewName.split("").includes(num)
      )
    ) {
      setUseError("Write Only Text Please");
      return null;
    }
    // ___________________________________________________

    setUseColors([...useColors, { color: useColor, name: useNewName }]);
    setUseNewName("");
    setUseError("");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
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
          {/* <input type={"text"} value={useNewName} onChange={handleAddName} /> */}
          <TextField
            error={useError}
            helperText={useError}
            id="standard-basic"
            type="text"
            value={useNewName}
            onChange={handleAddName}
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
          <DragableColorBox color={color.color} name={color.name} />
        ))}
      </main>
    </div>
  );
}
