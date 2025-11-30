import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Result from "./Result";
import Rules from "./Rules";

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function resetGame() {
    setComputerChoice(null);
    setUserChoice(null);
    setResult("");
  }
  return (
    <div className="container">
      <Header score={score} />
      {result === "" && (
        <Content
          onComputerChoice={setComputerChoice}
          onUserChoice={setUserChoice}
          onResult={setResult}
          onSetScore={setScore}
        />
      )}
      {result !== "" && (
        <Result
          onUserChoice={userChoice}
          onComputerChoice={computerChoice}
          onResult={result}
          resetGame={resetGame}
        />
      )}
      <Footer onOpen={setIsOpen} onScore={setScore} Onresult={setResult}/>
      {isOpen && <Rules onOpen={setIsOpen} />}
    </div>
  );
}
