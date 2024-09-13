export default function Container() {
  const handleClick = () => {
    console.log("Click3 !");
  };

  const handleClick4 = (id) => {
    console.log("Click4 !", id);
  };

  const handleClick5 = (e, id) => {
    console.log("Click4 !", e, id);
  };

  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button
        onClick={() => console.log("Click !")}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderColor: "olive",
          borderRadius: "10px",
        }}
      >
        Click1 !
      </button>

      {/* Mauvaise pratique, peu maintenable */}
      <button
        onClick={() => {
          console.log("Click2 !");
          console.log("Click2 !");
          console.log("Click2 !");
          console.log("Click2 !");
          console.log("Click2 !");
        }}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderColor: "olive",
          borderRadius: "10px",
        }}
      >
        Click !
      </button>

      {/* On lui préfère en général ceci */}
      <button
        onClick={handleClick}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderColor: "olive",
          borderRadius: "10px",
        }}
      >
        Click3 !
      </button>

      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button
        onClick={() => handleClick4(1980)}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderColor: "olive",
          borderRadius: "10px",
        }}
      >
        Click4 !
      </button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button
        onClick={(e) => handleClick5(e.target, 1984)}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderColor: "olive",
          borderRadius: "10px",
        }}
      >
        Click5 !
      </button>
    </div>
  );
}
