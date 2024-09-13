export default function Container() {
  const isLogged = true;

  return (
    <div>
      {isLogged ? <h1>Rendu conditionnel avec if</h1> : <h1>Not Logged</h1>}
    </div>
  );
}
