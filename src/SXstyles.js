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
  // background: "#981010",
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
  height: "150px",
  width: "100%",
  padding: "0 2rem",
  zIndex: 5,
  background: "teal",
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
};

export const cardBackSx = {
  ...cardFrontSx,
  transform: "rotateX(180deg)",
};

export const cardOverlaySx = {
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

export const questionCardBoxSx = {
  ...flexBoxSx,
  height: {
    xs: "150px",
    sm: "175px",
    md: "225px",
    lg: "275px",
    xl: "400px",
  },
  width: {
    xs: "300px",
    sm: "350px",
    md: "450px",
    lg: "550px",
    xl: "800px",
  },
  padding: "1rem",
  background: "#fff",
  boxShadow: "1px 1px 5px 1px #474747 inset;",
  borderRadius: "5px",
  position: "relative",
};

export const breadSx = {
  ...flexBoxSx,
  justifyContent: "flex-end",
  height: {
    xs: "20px",
    sm: "30px",
    md: "50px",
    lg: "60px",
  },
  fontWeight: "bold",
  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
};
