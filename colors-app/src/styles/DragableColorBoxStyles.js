export const styles = {
  root: {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textAlign: "center",
  },
  boxContent: {
    position: "absolute",

    display: "flex",
    justifyContent: "space-between",
    textAlign: " start",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    fontSize: " 12px",
    letterSpacing: " 1px",
    textTransform: " capitalize",
    color: "black",
    "& svg": {
      transition: "all .2s ease",
      backfaceVisibility: "hidden",
    },
    "& svg:hover ": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
};
