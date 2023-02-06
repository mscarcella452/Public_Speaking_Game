import backgroundWords from "./Images/backgroundWords.png";
import PublicSpeakingCropped from "./Images/PublicSpeakingCropped.png";

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

export const backgroundWordsImageSx = {
  background: `url(${backgroundWords}) no-repeat center`,
  backgroundSize: "1600px",
};

export const backgroundWordsOverlaySx = {
  ...backgroundWordsImageSx,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100%",
  width: "100%",
  zIndex: 0,
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
  justifyContent: "space-between",
  alignItems: "flex-start",
  height: "120px",
  width: "100%",
  padding: "0 2rem",
  zIndex: 5,
  // background: "teal",
};

export const homeBottomMarginSx = {
  ...marginSx,
  height: "225px",
};

export const frontFlipSx = {
  ...flexBoxSx,
  position: "absolute",
  backfaceVisibility: "hidden",
  ...backgroundWordsImageSx,
  padding: "1.5rem",
  borderRadius: "20px",
};

export const backFlipSx = {
  ...frontFlipSx,
  padding: 0,
  background: "#fff",
  transform: "rotateX(180deg)",
};

export const cardOverlaySx = {
  background: `url(https://www.transparenttextures.com/patterns/navy.png) no-repeat center`,
  backgroundSize: "cover",
  // backgroundSize: "cover",
  borderRadius: "5px",
  opacity: 0.35,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export const cardContainerSx = {
  ...flexBoxSx,
  padding: {
    xs: "1rem",
    sm: "1rem",
    md: "1rem",
    lg: "1rem",
  },
  background: "#fff",
  boxShadow: "1px 2px 7px 1px #474747 inset;",
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

export const logoImageSx = {
  width: "100%",
  height: "100%",
  background: `url(${PublicSpeakingCropped}) no-repeat center`,
  backgroundSize: "contain",
};

export const mainFlipContainerSx = {
  ...flexBoxSx,
  padding: {
    xs: "3px",
    sm: "3px",
    md: "3px",
    lg: "3px",
  },
  boxShadow: "0px 0px 3px .5px black inset;",
  // boxShadow: "1px 2px 7px 1px #474747 inset;",
  borderRadius: "5px",
  position: "relative",
  borderRadius: "20px",
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
  background: "#333",
};
