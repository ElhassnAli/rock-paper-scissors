export default function Footer({ onOpen, onScore, Onresult }) {
  function openRules() {
    onOpen((e) => !e);
  }
  function resetScore() {
    onScore(0);
    Onresult("");
  }
  return (
    <footer>
      <button onClick={resetScore}>Reset</button>
      <button onClick={openRules}>Rules</button>
    </footer>
  );
}
