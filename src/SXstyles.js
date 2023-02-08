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

export const backgroundWordsImageSx = {
  background: `url(${backgroundWords}) no-repeat center`,
  backgroundSize: "cover",
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
  zIndex: 7,
};

export const footerSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  height: "80px",
  width: "100%",
};
export const HeaderSx = {
  ...footerSx,
  height: "40px",
  // background: "teal",
};

export const frontFlipSx = {
  ...flexBoxSx,
  position: "absolute",
  backfaceVisibility: "hidden",
  overflow: "hidden",
  padding: "1.5rem",
};

export const backFlipSx = {
  ...frontFlipSx,
  padding: 0,
  background: "#fff",
  transform: "rotateX(180deg)",
  position: "relative",
  zIndex: 20,
};

export const fabricOverlaySx = {
  background: `url(https://www.transparenttextures.com/patterns/navy.png) no-repeat center`,
  backgroundSize: "cover",
  borderRadius: "5px",
  opacity: 0.2,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 7,
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
  boxShadow: "0px 0px 3px .5px #333 inset;",
  border: "1px solid #333",
  // boxShadow: "1px 2px 7px 1px #474747 inset;",
  position: "relative",
  borderRadius: "10px",
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
  // background: "rgb(15, 15, 15)",
};

export const BtnFlipContainerSx = {
  ...mainFlipContainerSx,
  borderRadius: "5px",
  height: "100%",
  width: {
    xs: "160px",
    sm: "160px",
    md: "160px",
    lg: "160px",
    xl: "160px",
  },
  border: ".25px solid #333",
};
export const smallBtnFlipContainerSx = {
  ...BtnFlipContainerSx,
  height: "40px",
  width: {
    xs: "160px",
    sm: "160px",
    md: "160px",
    lg: "160px",
    xl: "50px",
  },
};

export const flipBoxInnerSx = {
  width: "100%",
  height: "100%",
  transition: "transform 1.5s",
  transformStyle: "preserve-3d",
  position: "relative",
  backgroundColor: "#981010",
};

export const mainBoxSx = {
  ...flexBoxSx,
  height: "auto",
  position: "relative",
};

export const btnSx = {
  ...flexBoxSx,
  zIndex: 20,
};
