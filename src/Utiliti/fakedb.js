// use localstorage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  // get the shopping Cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    // console.log(typeof storedCart);
    shoppingCart = JSON.parse(storedCart);
  }
  // add quantity
  const quantity = shoppingCart[id];

  if (quantity) {
    // console.log("already exists");
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
    // console.log("new item");
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};


export { addToDb };
