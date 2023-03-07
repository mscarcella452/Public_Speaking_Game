import { useState, useContext } from "react";
import { Box } from "@mui/material";
import { HeaderSx } from "../../Styles/SXstyles";
import { SmallBtnFlipContainerOverlay } from "../Helpers/FlipContainer";
import { TopBtnFabric } from "../Helpers/BtnFabric";
import {
  gameContext,
  gameDispatchContext,
} from "../../Context/GameStatusContext";
import { timerDispatchContext } from "../../Context/TimerContext";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { buttonDispatchContext } from "../../Context/ButtonContext";

export default function TopBtnContainer({ active, showTopic }) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const btnDispatch = useContext(buttonDispatchContext);
  const [rulesBtnIcon, toggleRulesIcon] = useToggleRulesBtnIcon(
    game,
    btnDispatch
  );

  const toggleRules = () => {
    toggleRulesIcon();
    // if game is off-------------------
    if (game.status === "off") {
      // if game is off && rules are off
      if (!game.rules) {
        btnDispatch({ type: "TOGGLE_PLAY_BTN" });
        setTimeout(() => {
          gameDispatch({ type: "TOGGLE_RULES" });
          gameDispatch({ type: "LOAD" });
        }, 1200);
        // if game is off && rules are on
      } else {
        gameDispatch({ type: "LOAD" });
        setTimeout(() => {
          gameDispatch({ type: "TOGGLE_RULES" });
          btnDispatch({ type: "TOGGLE_PLAY_BTN" });
        }, 1200);
      }
      // if game is on-----------------------
    } else {
      game.status === "speech" && timerDispatch({ type: "TOGGLE_TIMER" });
      btnDispatch({ type: "TOGGLE_QUIT_BTN" });
      gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        gameDispatch({ type: "TOGGLE_RULES" });
        gameDispatch({ type: "LOAD" });
      }, 1200);
    }
  };

  const quitGame = () => {
    btnDispatch({ type: "TOGGLE_RULES_BTN" });
    btnDispatch({ type: "TOGGLE_QUIT_BTN" });
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "GAME_OFF" });
      timerDispatch({ type: "RESET" });
    }, 1200);
  };

  const endIntermission = () => {
    gameDispatch({ type: "LOAD" });
    btnDispatch({ type: "TOGGLE_QUIT_BTN" });
    setTimeout(() => {
      timerDispatch({ type: "RESET" });
      showTopic();
      btnDispatch({ type: "TOGGLE_TOP_BTNS" });
    }, 1200);
  };
  const handleQuit = () => {
    game.status === "intermission" ? endIntermission() : quitGame();
  };

  const quitIcon =
    game.status === "intermission" ? (
      <ChevronLeftIcon sx={topButtonIconSx} />
    ) : (
      <DisabledByDefaultIcon sx={topButtonIconSx} />
    );

  return (
    <Box sx={HeaderSx}>
      {/* quitBtn */}
      <SmallBtnFlipContainerOverlay active={active.top.quitBtn}>
        <TopBtnFabric onClick={handleQuit}>{quitIcon}</TopBtnFabric>
      </SmallBtnFlipContainerOverlay>
      {/* rulesBtn */}
      <SmallBtnFlipContainerOverlay active={active.top.rulesBtn}>
        <TopBtnFabric onClick={toggleRules}>{rulesBtnIcon}</TopBtnFabric>
      </SmallBtnFlipContainerOverlay>
    </Box>
  );
}

const topButtonIconSx = {
  "@media (min-height: 1024px)": { fontSize: "40px" },
};

function useToggleRulesBtnIcon(game, btnDispatch) {
  const [rulesBtnIcon, setRulesBtnIcon] = useState(
    <HelpCenterIcon sx={topButtonIconSx} />
  );
  const toggleRulesIcon = () => {
    btnDispatch({ type: "TOGGLE_RULES_BTN" });
    setTimeout(() => {
      btnDispatch({ type: "TOGGLE_RULES_BTN" });
      game.rules
        ? setRulesBtnIcon(<HelpCenterIcon sx={topButtonIconSx} />)
        : setRulesBtnIcon(<KeyboardReturnIcon sx={topButtonIconSx} />);
    }, 1200);
  };
  return [rulesBtnIcon, toggleRulesIcon];
}
