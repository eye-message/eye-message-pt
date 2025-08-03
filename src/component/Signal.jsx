import "../styles/signal.css";

const Signal = ({ currentMorse }) => {
  console.log("currentMorse", currentMorse);

  return (
    <div className="morse-area">
      <p className="morse-title">Morse Signal</p>
      <div className="morse-display">
        <div className="morse-signal">
          {currentMorse.split("").map((bit, i) => (
            <span
              key={i}
              className={`morse-bit ${bit === "0" ? "dot" : "dash"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signal;
