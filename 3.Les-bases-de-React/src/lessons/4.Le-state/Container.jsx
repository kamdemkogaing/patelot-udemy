import { useState } from "react";

export default function Container() {
  // state
  const [count, setCount] = useState(0);

  console.log("RENDER!");

  //comportement
  const handleClick = () => {
    setCount(count + 1);
  };

  // render
  return (
    <div>
      <h1>Le state : {count}</h1>
      <button
        className="btn"
        onClick={handleClick}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderColor: "olive",
          borderRadius: "10px",
        }}
      >
        Incrementer !
      </button>
    </div>
  );
}
