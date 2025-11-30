export default function Header({ score }) {
  return (
    <header>
      <div>
        <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="" />
      </div>
      <div className="score">
        <p>SCORE</p>
        <p>{score}</p>
      </div>
    </header>
  );
}
