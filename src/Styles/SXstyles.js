import backgroundWords from "../Images/backgroundWords.png";
import PublicSpeakingCropped from "../Images/PublicSpeakingCropped.png";

export const Sx = {
  font: {
    display: "'Sunny Spells Basic', sans-serif",
    secondary: "'Averia Libre', cursive",
    // rules: "'Averia Libre', cursive",
    rules: "'Neucha', cursive",
    card: "'Neucha', cursive",
    // display: "'Neucha', cursive",
    // card: "'Edu TAS Beginner', cursive",
    // card: "'Shantell Sans', cursive",

    // card: "'Sriracha', cursive",
    // card: "'Averia Libre', cursive",
    // display: "'Sriracha', cursive",
  },
  color: {
    // primary: "#981010",
    primary: "#457b9d",
    secondary: "#be2f3a",
    success: "#0ead69",
    fail: "#981010",
    // secondary: "#e63946",
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
      gap: {
        galaxyFold: "1rem",
        mobile: "1rem",
        xs: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "2rem",
      },
      "@media (max-height: 414px)": {
        gap: { galaxyFold: ".25rem", xs: ".75rem" },
      },
    },
  },
  justifyContent: "space-around",

  fontSize: {
    logo: {
      fontSize: {
        galaxyFold: "4.5rem",
        mobile: "500%",
        xs: "145px",
        sm: "180px",
      },

      "@media (min-height: 1024px)": { fontSize: "12rem" },
      "@media (min-height: 1300px)": { fontSize: "15rem" },

      "@media (max-height: 512px) ": {
        fontSize: {
          galaxyFold: "4.5rem",
          mobile: "500%",
        },
      },
      "@media (max-Width: 414px)": {
        fontSize: {
          galaxyFold: "4.5rem",
          mobile: "550%",
          xs: "110px",
        },
      },
      "@media (max-Height: 414px)": {
        fontSize: {
          galaxyFold: "4.5rem",
          mobile: "100px",
          xs: "500%",
          sm: "110px",
          md: "125px",
          lg: "130px",
        },
      },
      // "@media (max-Height: 390px)": {
      //   fontSize: {
      //     galaxyFold: "4.5rem",
      //     mobile: "100px",
      //     xs: "95px",
      //     sm: "105px",
      //     lg: "130px",
      //   },
      // },
    },
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
  minHeight: { galaxyFold: "40px", lg: "50px", xl: "60px" },
  height: { galaxyFold: "50px", lg: "70px", xl: "70px" },
  "@media (min-height: 1024px)": { height: "80px" },

  gap: { galaxyFold: ".75rem", mobile: ".75rem", xs: "1rem" },
};
export const HeaderSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  height: "40px",
  minHeight: { galaxyFold: "30px", xl: "40px" },
  "@media (min-height: 1024px)": { height: "60px" },
};
export const fabricBackgroundSx = {
  // background: `url(https://www.transparenttextures.com/patterns/navy.png) no-repeat center`,
  // backgroundSize: "cover",
  // background: `url("https://www.transparenttextures.com/patterns/old-wall.png") repeat center`,
  // backgroundSize: "1%",
  background: `url("https://www.transparenttextures.com/patterns/navy.png") repeat center`,
  backgroundSize: { galaxyFold: "100%", sm: "75%", lg: "50%" },
  // background: `url("https://www.transparenttextures.com/patterns/woven-light.png") repeat center`,
  // backgroundSize: ".5%",
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
    lg: "450px",
    xl: "450px",
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
  "@media (max-height: 414px)": { maxWidth: "100%" },
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
