import React from "react";

const Card = ({ id, state, changeState }) => {
  return (
    <div>
      <div>User {id}</div>
      <div>State du parent : {state}</div>
      <button onClick={() => changeState("LUDOVIC KOGAING")}>
        Changer le state
      </button>
    </div>
  );
};

export default Card;
