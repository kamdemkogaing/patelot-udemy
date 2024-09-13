import { useRef, useState } from "react";
export default function Container() {
  //state

  // 1. Isoler une valeur parmi les mises a jour
  // 2. Selectioner un element dans un environement React
  const countRef = useRef(0);
  console.log(countRef);

  const txtRef = useRef();

  const [state, setState] = useState(0);

  //comportement
  const handleCountRef = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  const handleCountSate = () => {
    setState(state + 1);
  };

  console.log("PAS DE MISE À JOUR DU COMPOSANT");
  // render
  return (
    <div>
      <h1>Le Hook useRef</h1>
      <p>Valeur du state: {state}</p>
      <p>Valeur de la Ref: {countRef.current}</p>
      <button onClick={handleCountRef}>Click useRef !</button>
      <button onClick={handleCountSate}>Click useState !</button>

      <p ref={txtRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
        distinctio ipsa laudantium vero quasi impedit est obcaecati, qui
        provident doloribus quae quas eveniet dignissimos odit, tempore eum
        voluptatem adipisci alias.
      </p>
    </div>
  );
}
