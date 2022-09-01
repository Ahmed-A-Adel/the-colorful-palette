import bg from "./bg.svg";
export const Styles = {
  root: {
    // backgroundImage: `url(${bg})`,
    // backgroundColor: "#EE5522",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    // overflow: "scroll",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: "2rem",
    "@media (max-width: 1175px)": {
      width: "60%",
    },
    "@media (max-width: 980px)": {
      width: "70%",
    },
    "@media (max-width: 562px)": {
      width: "80%",
    },
    "@media (max-width: 485px)": {
      width: "90%",
    },
    "@media (max-width: 430px)": {
      width: "80%",
    },
  },
  nav: {
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "& a": {
      textTransform: "capitalize",
      color: "black",
      borderBlockEnd: "2px dashed black",
      textDecoration: "none",
      fontWeight: "400",
      paddingBottom: "5px",
    },
  },
  palettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minMax(185px,1fr))",
    // // gap: "5%",
    // display: "flex",
    // flexWrap: "wrap",
    gap: "1rem",
    justifyItems: "center",
  },
};
