import "./App.css";
import LandingPage from "./pages/LandingPage";
import Game from "./pages/Game";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
