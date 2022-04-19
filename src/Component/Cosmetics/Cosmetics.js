import React from "react";

const Cosmetics = () => {
  const cosmetics = [
    {
      id: 570,
      name: "Alta",
      price: 120,
    },
    {
      id: 670,
      name: "Nailpalish",
      price: 150,
    },
    {
      id: 770,
      name: "Face Powder",
      price: 300,
    },
    {
      id: 870,
      name: "Ilana",
      price: 220,
    },
    {
      id: 970,
      name: "Mashkara",
      price: 320,
    },
    {
      id: 470,
      name: "Shope",
      price: 130,
    },
    {
      id: 370,
      name: "Churi",
      price: 120,
    },
  ];
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      {cosmetics.map((cosmetic) => console.log(cosmetic))}
    </div>
  );
};

export default Cosmetics;
