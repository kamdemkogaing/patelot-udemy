import { useEffect, useState } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  // state
  const [APISate, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setAPIState({ ...APISate, loading: true });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAPIState({ loading: false, error: false, data: data });
      });
  }, []);

  let content;
  if (APISate.loading)
    content = <img src={spinner} alt="icone de chargement" />;
  else if (APISate.error) content = <p>Une erreur est survenue...</p>;
  else if (APISate.data?.length > 0) {
    console.log("SUCESS");
  }

  //comportements

  // render
  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
