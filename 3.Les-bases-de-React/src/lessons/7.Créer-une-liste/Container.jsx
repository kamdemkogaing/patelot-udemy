export default function Container() {
  const personnes = [
    { id: 1, nom: "Patrick", age: 29, ville: "Douala" },
    { id: 2, nom: "Marie", age: 25, ville: "Yaoundé" },
    { id: 3, nom: "Jean", age: 35, ville: "Bafoussam" },
    { id: 4, nom: "Julie", age: 32, ville: "Buea" },
  ];

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {personnes.map((personne) => {
          return <li key={personne.id}>{personne.nom}</li>;
        })}
      </ul>
    </div>
  );
}
