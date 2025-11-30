export default function Rules({ onOpen }) {
  function close() {
    onOpen((e) => !e);
  }
  return (
    <div className="rules">
      <div>
        <h2>Rules</h2>
        <button className="close" onClick={close}>
          &times;
        </button>
      </div>
      <img src={`${import.meta.env.BASE_URL}images/image-rules.svg`} alt="" />
    </div>
  );
}
