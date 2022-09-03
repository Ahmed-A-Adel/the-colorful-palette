import React from "react";
import { useParams, Link } from "react-router-dom";
import MiniPalette from "./MiniPalette.js";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./styles/HomeStyles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function Home(props) {
  const { id } = useParams();
  const { classes, seedColors, deletePalette } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/newPalette">create new palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {/* <div className={classes.palettes}> */}
          {seedColors.map((palette) => (
            <CSSTransition classNames="fade" key={palette.id} timeout={300}>
              <MiniPalette
                {...palette}
                deletePalette={deletePalette}
                key={palette.id}
                palettes={seedColors}
              />
            </CSSTransition>
          ))}
          {/* </div> */}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default withStyles(Styles)(Home);
