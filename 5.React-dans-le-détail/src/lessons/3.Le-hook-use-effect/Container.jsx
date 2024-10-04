import { useEffect, useState } from "react";
import "./Container.css";
export default function Container() {
  // state
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("KAMDEM");
  }, []);

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  );
}
