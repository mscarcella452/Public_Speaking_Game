import React, { useState, useEffect, useContext } from "react";
import { useToggle } from "../Helpers/CustomHooks";
import { Box, Button } from "@mui/material";
import { btnSx, HeaderSx, smallBtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import { timerDispatchContext } from "../Context/TimerContext";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export default function TopBtnContainer({ changeThirdBtnTitle }) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const [rulesBtnActive, toggleRulesBtnActive] = useToggle(false);

  const [rulesBtnIcon, setRulesBtnIcon] = useState(<HelpCenterIcon />);

  useEffect(() => {
    rulesBtnActive && toggleRulesBtnActive();
    setTimeout(() => {
      toggleRulesBtnActive();
    }, 1000);
  }, [game.rules]);

  const changeRulesBtnIcon = icon => {
    setTimeout(() => {
      setRulesBtnIcon(icon);
    }, 1000);
  };

  const toggleRules = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "TOGGLE_RULES" });
      setTimeout(() => {
        gameDispatch({ type: "LOAD" });
      }, 1000);
    }, 500);
    game.rules
      ? changeRulesBtnIcon(<HelpCenterIcon />)
      : changeRulesBtnIcon(<KeyboardReturnIcon />);
  };

  const handleQuit = () => {
    gameDispatch({ type: "LOAD" });
    changeThirdBtnTitle("Play");
    setTimeout(() => {
      gameDispatch({ type: "GAME_OFF" });
      timerDispatch({ type: "RESET" });
    }, 500);
  };

  return (
    <Box sx={HeaderSx}>
      <FlipContainer
        active={!game.rules && game.status !== "off"}
        // active={!game.rules && game.status !== "off" && game.flip}

        containerSx={smallBtnFlipContainerSx}
        overlay={true}
      >
        <Button onClick={handleQuit} sx={btnSx}>
          <CancelPresentationIcon />
        </Button>
      </FlipContainer>
      <FlipContainer
        active={rulesBtnActive}
        containerSx={smallBtnFlipContainerSx}
        overlay={true}
      >
        <Button onClick={toggleRules} sx={btnSx}>
          {rulesBtnIcon}
        </Button>
      </FlipContainer>
    </Box>
  );
}

const HeaderSx2 = {
  height: {
    xs: "50px",
    sm: "50px",
    md: "50px",
    lg: "50px",
    xl: "50px",
  },
};

const smallBtnWidthSx = {
  xs: "55px",
  sm: "55px",
  md: "55px",
  lg: "55px",
  xl: "55px",
};
