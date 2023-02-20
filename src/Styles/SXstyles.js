import backgroundWords from "../Images/backgroundWords.png";
import PublicSpeakingCropped from "../Images/PublicSpeakingCropped.png";

export const Sx = {
  font: {
    display: "'Sunny Spells Basic', sans-serif",
    // display: "'Bevan', cursive",
    // card: "'Shantell Sans', cursive",
    card: "'Averia Libre', cursive",
    // card: "'Boogaloo', cursive",
    // card: "'Cabin Sketch', cursive",
    // card: "'Sriracha', cursive",
    // card: "'Rowdies', cursive",
  },
  color: {
    // primary: "teal",
    primary: "#981010",
  },
  padding: {
    main: {
      galaxyFold: "1.5rem 1rem",
      mobile: "1.5rem 1rem",
      xs: "1.5rem 1rem",
      sm: "1rem 1.25rem",
      md: "1rem 1.5rem",
      lg: "1rem 2rem",
      xl: "1.5rem 2rem",
    },
  },
  gap: {
    main: {
      galaxyFold: "1rem",
      mobile: "1rem",
      xs: "1rem",
      sm: "1rem",
      md: "1rem",
      lg: "2rem",
      xl: "2rem",
    },
  },
  justifyContent: {
    galaxyFold: "space-around",
    mobile: "space-around",
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
  minHeight: { galaxyFold: "40px", lg: "50px", xl: "70px" },
  height: { galaxyFold: "50px", lg: "70px", xl: "80px" },
  gap: { galaxyFold: ".75rem", mobile: ".75rem", xs: "1rem" },
};
export const HeaderSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  height: "40px",
  minHeight: { galaxyFold: "30px", xl: "40px" },
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
    galaxyFold: "20px",
    mobile: "20px",
    xs: "20px",
    sm: "30px",
    md: "50px",
    lg: "60px",
  },
  fontWeight: "bold",
  fontSize: {
    galaxyFold: "1.25rem",
    mobile: "1.25rem",
    xs: "1.25rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "3rem",
  },
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
  minHeight: "100px",
  height: {
    galaxyFold: "100%",
    mobile: "550px",
    xs: "650px",
    sm: "475px",
    md: "475px",
    lg: "475px",
    xl: "475px",
  },
  maxHeight: "100%",
  maxWidth: {
    galaxyFold: "100%",
    mobile: "100%",
    xs: "500px",
    sm: "600px",
    md: "700px",
    lg: "950px",
    xl: "1050px",
  },
  "@media (min-height: 1024px)": {
    height: { xs: "100%", sm: "750px", md: "650px", lg: "650px", xl: "650px" },
    maxWidth: {
      xs: "100%",
      sm: "650px",
      md: "800px",
      lg: "850px",
      xl: "1250px",
    },
  },
  "@media (min-height: 1250px)": {
    height: { xs: "100%", sm: "100%", md: "500px", lg: "850px", xl: "650px" },
  },
  // background: {
  //   galaxyFold: "purple",
  //   mobile: "silver",
  //   xs: "teal",
  //   sm: "yellow",
  //   md: "red",
  //   lg: "green",
  //   xl: "blue",
  // },

  position: "relative",
};

export const btnSx = {
  ...flexBoxSx,
  zIndex: 20,
  fontFamily: Sx.font.display,
  color: Sx.color.primary,
  fontSize: "2rem",
};
