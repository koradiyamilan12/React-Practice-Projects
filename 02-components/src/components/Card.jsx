import React from "react";

const Card = () => {
  const user = "Harsh";
  const age = 89;
  return (
    <div className="card">
      <h1>{user}</h1>
      <h2>and I an {age} year old</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
        quaerat!
      </p>
    </div>
  );
};

export default Card;
