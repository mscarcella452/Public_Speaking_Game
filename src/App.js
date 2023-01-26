import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GamePage from "./Pages/GamePage";
import RulesPage from "./Pages/RulesPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Play' element={<GamePage />} />
      <Route path='/Rules' element={<RulesPage />} />
    </Routes>
  );
}

export default App;
