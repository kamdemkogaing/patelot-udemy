import React from "react";

const Container = () => {
  const handleClick = (event, id) => {
    console.log("BEPROO DEV:", event, id);
  };

  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ul className="list">
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>

      <input type="text" name="to-do-list" id="" />
      <button className="btn" onClick={(event) => handleClick(event, 1980)}>
        Ajouter +
      </button>
    </div>
  );
};

export default Container;
