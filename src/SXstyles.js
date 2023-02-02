export const flexBoxSx = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
};

export const pageSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "space-between",
  background: "transparent",
  overflow: "hidden",
  padding: "1rem",
};

export const backgroundPageSx = {
  ...pageSx,
  background: "#fff",
  position: "relative",
};

export const containerSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  background: "transparent",
  padding: "1rem 2rem",
  overflow: "scroll",
};

export const marginSx = {
  ...flexBoxSx,
  height: "50px",
  width: "100%",
  // background: "teal",
  padding: "0 2rem",
  zIndex: 5,
};
// export const topMarginSx = {
//   ...marginSx,
//   height: "80px",
// };
// export const bottomMarginSx = {
//   ...marginSx,
//   height: "200px",
// };
export const homeBottomMarginSx = {
  ...marginSx,
  height: "225px",
};

export const cardFrontSx = {
  ...flexBoxSx,
  position: "absolute",
  backfaceVisibility: "hidden",
  // border: ".5px solid black",
  // borderRadius: "5px",
};

export const cardBackSx = {
  ...cardFrontSx,
  transform: "rotateX(180deg)",
};

export const cardOverlay = {
  background: `url(https://www.transparenttextures.com/patterns/navy.png) no-repeat center`,
  backgroundSize: "cover",
  borderRadius: "5px",
  opacity: 0.35,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};
