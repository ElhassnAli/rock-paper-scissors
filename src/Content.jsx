export default function Content({
  onComputerChoice,
  onUserChoice,
  onResult,
  onSetScore,
}) {
  const choices = ["rock", "paper", "scissors"];
  function handelUserSelect(e) {
    const userSelect = e.currentTarget.value;
    let computerChoices = choices[Math.floor(Math.random() * 3)];

    if (userSelect === computerChoices) {
      onComputerChoice(computerChoices);
      onUserChoice(userSelect);
      onResult("Even");
      return;
    }
    // =============================
    if (userSelect === "rock") {
      if (computerChoices === "paper") {
        onComputerChoice(computerChoices);
        onUserChoice(userSelect);
        onResult("Computer Win");
        return;
      } else {
        onComputerChoice(computerChoices);
        onUserChoice(userSelect);
        onResult("You Win");
        onSetScore((e) => e + 1);
        return;
      }
    }
    // ===========================
    if (userSelect === "paper") {
      if (computerChoices === "rock") {
        onComputerChoice(computerChoices);
        onUserChoice(userSelect);
        onResult("You Win");
        onSetScore((e) => e + 1);
        return;
      } else {
        onComputerChoice(computerChoices);
        onUserChoice(userSelect);
        onResult("Computer Win");
        return;
      }
    }
    // ================================
    if (userSelect === "scissors") {
      if (computerChoices === "paper") {
        onComputerChoice(computerChoices);
        onUserChoice(userSelect);
        onResult("You Win");
        onSetScore((e) => e + 1);
        return;
      } else {
        onComputerChoice(computerChoices);
        onUserChoice(userSelect);
        onResult("Computer Win");
        return;
      }
    }
  }

  return (
    <>
      <main>
        <img
          src={`${import.meta.env.BASE_URL}images/bg-triangle.svg`}
          alt=""
          id="triangle"
        />
        <button id="scissors" value="scissors" onClick={handelUserSelect}>
          <img
            src={`${import.meta.env.BASE_URL}images/icon-scissors.svg`}
            alt=""
          />
        </button>
        <button id="paper" value="paper" onClick={handelUserSelect}>
          <img
            src={`${import.meta.env.BASE_URL}images/icon-paper.svg`}
            alt=""
          />
        </button>
        <button id="rock" value="rock" onClick={handelUserSelect}>
          <img src={`${import.meta.env.BASE_URL}images/icon-rock.svg`} alt="" />
        </button>
      </main>
    </>
  );
}
