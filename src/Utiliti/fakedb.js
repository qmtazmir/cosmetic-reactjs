// use localstorage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  // get the shopping Cart from local storage
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

const removeFromDataBase = (id) => {
  // console.log("remveing from fakedb", id);

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      // console.log("exist in the cart");
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDataBase, deleteShoppingCart };
