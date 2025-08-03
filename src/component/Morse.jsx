import "../styles/morse.css";

const Morse = ({ binaryStr, size = "small" }) => {
  const classMap = {
    0: "dot",
    1: "dash",
  };

  return (
    <div className={`morse-wrapper ${size}`}>
      {binaryStr.split("").map((char, idx) => (
        <span key={idx} className={`${classMap[char]} ${size}`} />
      ))}
    </div>
  );
};

export default Morse;
