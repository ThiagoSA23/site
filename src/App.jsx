import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./componentes/Welcome";
import Question from "./componentes/Question";
import GameOver from "./componentes/GameOver";

import PickCategory from "./componentes/PickCategory";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
