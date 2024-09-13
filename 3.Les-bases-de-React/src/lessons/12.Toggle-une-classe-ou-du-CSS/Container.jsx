import { useState } from "react";
import "./Container.css";

export default function Container() {
  // state
  const [darkMode, setDarkMode] = useState(false);

  //comportement

  // render
  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenue sur NotesMania</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        omnis vitae reprehenderit velit iure, fugit quaerat perferendis quod
        fuga corrupti quae? Culpa sit ut eligendi eaque vitae, amet veniam
        nesciunt?
      </p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Activer le {darkMode ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
