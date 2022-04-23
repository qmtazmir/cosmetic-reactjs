import React from "react";
import { addToDb, removeFromDataBase } from "../../Utiliti/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    // console.log("item added", id);
    // (লোকাল স্টোরোজেসে ডাটা লোড করা)
    // localStorage.setItem(id, 1);
    // / (লোকাল স্টোরোজেসে ডাটা লোড করাহচ্ছে  অন্য একটি ফাইল থেকে)

    addToDb(id);
  };

  const addToCartWithPram = () => addToCart(id);
  {
    /* সিসেটম 2 এর সময় এটার প্রয়োজন পড়বেনা কারন  () => addToCart(id) এই ফাংশন টা সরাসরি বাটনে  যোগ করে দেওয়া হবে */
  }

  const revomeFromCart = (id) => {
    removeFromDataBase(id);
  };

  
  return (
    <div className="product">
      <h3>Product id: {id}</h3>
      <h3>By this : {name}</h3>
      <p>Only for :{price}$</p>
      {/* সিসেটম 1 */}
      <button onClick={addToCartWithPram}>Add to Cart (সিসেটম 1)</button>

      {/* সিসেটম 2 */}
      <button onClick={() => addToCart(id)}>কার্টে যোগ করুন (সিসেটম 2)</button>

      <button onClick={() => revomeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
