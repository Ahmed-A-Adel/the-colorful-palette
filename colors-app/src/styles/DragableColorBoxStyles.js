export const styles = {
  root: {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textAlign: "center",
    width: "20%",
    height: "25%",
    "@media (max-width: 950px)": {
      width: "25%",
      height: "20%",
    },
    "@media (max-width: 750px)": {
      width: "50%",
      height: "10%",
    },
    "@media (max-width: 500px)": {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    alignItems: "flex-end",
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
// @media screen and (max-width: 1350px) {
//   .colorBox,
//   .go-back {
//     width: 25%;
//     height: 20%;
//   }
//   .singleColorPalette .colorBox {
//     height: 33%;
//     width: 25%;
//   }
// }
// @media screen and (max-width: 1090px) {
//   .colorBox,
//   .go-back {
//     width: 50%;
//     height: 10%;
//   }
// }
