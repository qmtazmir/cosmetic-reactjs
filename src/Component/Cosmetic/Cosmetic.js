import React from "react";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  return (
    <div>
      <h3>Product id: {id}</h3>
      <h3>By this : {name}</h3>
      <p>Only for :{price}$</p>
    </div>
  );
};

export default Cosmetic;
