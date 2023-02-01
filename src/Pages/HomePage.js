import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paper, Button, Box } from "@mui/material";
import { GenerateQuestionProvider } from "../Context/GameContext";
import MaybeLaterPlank from "../Images/MaybeLaterPlank.png";
import PublicSpeakingCropped from "../Images/PublicSpeakingCropped.png";
import {
  flexBoxSx,
  containerSx,
  marginSx,
  homeBottomMarginSx,
  pageSx,
} from "../SXstyles";

export default function HomePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const nav = useNavigate();

  const startGame = () => {
    questionGenerator();
    nav("/PublicSpeaking/Play");
  };
  return (
    <Paper sx={{ ...pageSx, height: "100vh", gap: "1rem" }}>
      <Header
        sx={{
          ...marginSx,
          height: {
            xs: "35px",
            sm: "40px",
            md: "50px",
          },
          background: `url(${MaybeLaterPlank}) no-repeat center`,
          backgroundSize: "contain",
        }}
      >
        {/* <img
          src={`${MaybeLaterPlank}`}
          alt=''
          style={{
            height: "100%",
            width: "auto",
          }}
        /> */}
      </Header>

      <Box
        sx={{
          ...flexBoxSx,
          background: `url(${PublicSpeakingCropped}) no-repeat center`,
          backgroundSize: "contain",
        }}
      />

      <Footer
        sx={{
          ...homeBottomMarginSx,
          justifyContent: "space-between",
        }}
      >
        <Button
          variant='contained'
          onClick={() => nav("/PublicSpeaking/Rules")}
          sx={{
            ...flexBoxSx,
            width: "auto",
            height: "auto",
            fontSize: "1.5rem",
            backgroundColor: "#333",
            color: "#fff",
            // fontFamily: "'Solitreo', cursive",
          }}
        >
          Rules
        </Button>
        <Button
          variant='contained'
          onClick={startGame}
          sx={{
            ...flexBoxSx,
            width: "auto",
            height: "auto",
            fontSize: "1.5rem",
            backgroundColor: "#333",
            color: "#fff",
            // fontFamily: "'Solitreo', cursive",
          }}
        >
          Play!
        </Button>
      </Footer>
    </Paper>
  );
}

const Header = styled(Box)``;
const Footer = styled(Box)``;
