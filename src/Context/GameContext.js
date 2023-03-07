import GameStatusProvider from "./GameStatusContext";
import TimerContextProvider from "./TimerContext";
import ButtonContextProvider from "./ButtonContext";
import MediaQueryContextProvider from "./mediaQueryContext";
import StorageProvider from "./StorageContext";

function GameContext({ children }) {
  return (
    <MediaQueryContextProvider>
      <TimerContextProvider>
        <StorageProvider>
          <GameStatusProvider>
            <ButtonContextProvider>{children}</ButtonContextProvider>
          </GameStatusProvider>
        </StorageProvider>
      </TimerContextProvider>
    </MediaQueryContextProvider>
  );
}

export default GameContext;
