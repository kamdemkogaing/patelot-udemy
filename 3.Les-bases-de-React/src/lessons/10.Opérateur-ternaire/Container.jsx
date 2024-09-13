import { useState } from "react";
import "./Container.css";

export default function Container() {
  // state
  const [validation, setvalidation] = useState(false);

  //comportements

  //render
  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez-vous ?</label>
        <input onClick={() => setvalidation(!validation)} type="checkbox" />
        <p
          className={`${validation ? "valid" : "invalid"}`}
          /* style={{ color: `${validation ? "lightgreen" : "red"}` }} */
        >
          {validation
            ? "Bravo, vous pouvez envoyer le formulaire"
            : "Vous devez cocher la case"}
        </p>
      </form>
    </div>
  );
}
