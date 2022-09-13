import "./App.css";
import Question from "./components/Question";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Question className="question" />
      <Menu className="menu" />
    </div>
  );
}

export default App;
