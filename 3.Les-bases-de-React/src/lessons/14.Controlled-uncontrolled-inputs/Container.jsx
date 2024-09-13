import { useRef, useState } from "react";
import "./Container.css";

export default function Container() {
  const emailRef = useRef(0);
  const [state, setSate] = useState("");

  // comportements
  const handleChange = (e) => {
    setSate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);
  };

  // render
  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre pseudo</label>
        <input
          value={state}
          onChange={handleChange}
          type="text"
          id="name"
          placeholder="Votre pseudo"
        />

        <label htmlFor="email">Votre email</label>
        <input ref={emailRef} type="email" id="email" />

        <button>Envoyer</button>
      </form>
      <p>Votre pseudo : {state}</p>
    </div>
  );
}
