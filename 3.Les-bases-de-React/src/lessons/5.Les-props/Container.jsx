import { useState } from "react";
import Card from "./Card";

export default function Container() {
  const [state, setState] = useState("Patrick Kamdem");

  return (
    <div>
      <div>State du container : {state}</div>
      <Card id={1980} state={state} changeState={setState} />
      {/* {Card({ id: 1980, state: state, changeState: setState })} */}
    </div>
  );
}
