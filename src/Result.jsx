export default function onResult({
  onUserChoice,
  onComputerChoice,
  onResult,
  resetGame,
}) {
  return (
    <>
      <div className="result">
        <button
          className={`result__1 ${
            onResult === "You Win"
              ? "win"
              : onResult === "Computer Win"
              ? "lose"
              : onResult === "Even"
              ? "equal"
              : ""
          }`}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/icon-${onUserChoice}.svg`}
            alt=""
          />
        </button>
        <h1>{onResult}</h1>
        <button
          className={`result__1 ${
            onResult === "You Win"
              ? "lose"
              : onResult === "Computer Win"
              ? "win"
              : onResult === "Even"
              ? "equal"
              : ""
          }`}
        >
          <img
            src={`${
              import.meta.env.BASE_URL
            }images/icon-${onComputerChoice}.svg`}
            alt=""
          />
        </button>
      </div>
      <div className="reset_btn">
        <button onClick={resetGame}>Play Again</button>
      </div>
    </>
  );
}
