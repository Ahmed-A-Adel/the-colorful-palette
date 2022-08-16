export const styles = {
  root: {
    background: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    overflow: "hidden",
    // cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    background: "#d0c2c2",

    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative,",
    textTransform: "capitalize",
  },
  emoji: { marginLeft: "0.5rem", fontSize: "1.5rem" },
  colorBox: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
};
