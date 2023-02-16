import backgroundWords from "../Images/backgroundWords.png";
import PublicSpeakingCropped from "../Images/PublicSpeakingCropped.png";

export const Sx = {
  font: {
    display: "'Sunny Spells Basic', sans-serif",
    card: "'Rowdies', cursive",
    // card: "'Comic Marker Deluxe', sans-serif",
  },
  color: {
    primary: "#981010",
  },
  padding: {
    main: {
      xs: "1.5rem 1rem",
      sm: "1rem 1.25rem",
      md: "1rem 1.5rem",
      lg: "1rem 2rem",
      xl: "1.5rem 2rem",
    },
  },
  gap: {
    main: {
      xs: "3rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "2rem",
      xl: "2rem",
    },
  },
  justifyContent: {
    xs: "space-around",
    sm: "space-around",
    md: "space-around",
  },
};

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
  ...flexBoxSx,
  justifyContent: "flex-start",
  flexDirection: "column",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  boxSizing: "border-box",
  zIndex: 7,
  height: "100vh",
  padding: Sx.padding.main,
  gap: "1rem",
  // overflow: "scroll",
};

export const footerSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  minHeight: { xs: "40px", sm: "40px", md: "40px", lg: "50px", xl: "70px" },
  height: { xs: "50px", sm: "50px", md: "50px", lg: "70px", xl: "80px" },
  gap: "1rem",
};
export const HeaderSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  minHeight: { xs: "30px", sm: "30px", md: "30px", lg: "30px", xl: "40px" },
  height: { xs: "40px", sm: "40px", md: "40px", lg: "40px", xl: "40px" },
};
export const fabricBackgroundSx = {
  background: `url(https://www.transparenttextures.com/patterns/navy.png) no-repeat center`,
  backgroundSize: "cover",
};
export const fabricOverlaySx = {
  ...fabricBackgroundSx,
  opacity: 0.4,
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
  fontFamily: Sx.font.display,
  color: Sx.color.primary,
};

export const logoImageSx = {
  width: "100%",
  height: "100%",
  background: `url(${PublicSpeakingCropped}) no-repeat center`,
  backgroundSize: "contain",
};

export const mainBoxSx = {
  ...flexBoxSx,
  height: "100%",
  // background: {
  //   xs: "teal",
  //   sm: "yellow",
  //   md: "red",
  //   lg: "green",
  //   xl: "blue",
  // },
  minHeight: {
    xs: "300px",
    sm: "300px",
    md: "150px",
    lg: "250px",
    xl: "300px",
  },
  maxHeight: {
    xs: "65%",
    sm: "450px",
    md: "350px",
    lg: "525px",
    xl: "450px",
  },
  maxWidth: {
    xs: "100%",
    sm: "100%",
    md: "600px",
    lg: "800px",
    xl: "950px",
  },
  position: "relative",
  // border: "1px solid black",
};

export const btnSx = {
  ...flexBoxSx,
  zIndex: 20,
  fontFamily: Sx.font.display,
  color: Sx.color.primary,
  fontSize: "2rem",
};
