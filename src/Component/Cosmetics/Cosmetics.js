import React from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const cosmetics = [
    {
      id: "62600aee1ffafb0bd93e9064",
      price: 174,
      name: "Terrie Marsh",
    },
    {
      id: "62600aee92c884723e8e8798",
      price: 166,
      name: "Evangeline Talley",
    },
    {
      id: "62600aeef8173225a994784b",
      price: 136,
      name: "Tami Le",
    },
    {
      id: "62600aeebc80bd55e62c9182",
      price: 539,
      name: "Sheree Carrillo",
    },
    {
      id: "62600aeec87646570f23e631",
      price: 586,
      name: "Josefina Davidson",
    },
    {
      id: "62600aee8e6a4e022e7eacda",
      price: 134,
      name: "Rogers Stout",
    },
  ];
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
