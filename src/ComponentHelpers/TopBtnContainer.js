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

export default function TopBtnContainer({
  changeThirdBtnTitle,
  toggleQuitBtn,
  quitBtn,
  rulesBtnActive,
  toggleRulesBtnActive,
}) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);

  const [rulesBtnIcon, setRulesBtnIcon] = useState(<HelpCenterIcon />);

  const toggleRules = () => {
    toggleRulesBtnActive();
    setTimeout(() => {
      toggleRulesBtnActive();
      game.rules
        ? setRulesBtnIcon(<HelpCenterIcon />)
        : setRulesBtnIcon(<KeyboardReturnIcon />);
    }, 1200);
    if (game.status === "off") {
      !game.rules
        ? gameDispatch({ type: "TOGGLE_RULES" })
        : gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        !game.rules
          ? gameDispatch({ type: "LOAD" })
          : gameDispatch({ type: "TOGGLE_RULES" });
      }, 1200);
    } else {
      gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        gameDispatch({ type: "TOGGLE_RULES" });
        gameDispatch({ type: "LOAD" });
      }, 1200);
    }
  };

  const handleQuit = () => {
    toggleRulesBtnActive();
    changeThirdBtnTitle("Play");
    toggleQuitBtn();
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "GAME_OFF" });
      timerDispatch({ type: "RESET" });
    }, 1200);
  };

  return (
    <Box sx={HeaderSx}>
      <FlipContainer
        active={!game.rules && quitBtn}
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
