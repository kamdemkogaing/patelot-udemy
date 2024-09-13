import fuji from "./assets/fuji.jpg";

export default function Container() {
  return (
    <div>
      <h1>Utiliser des images</h1>
      <div>
        <img src={fuji} alt="Mont fuji" />
      </div>
    </div>
  );
}
