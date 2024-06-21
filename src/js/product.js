import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const cartItems = [];
  if (getLocalStorage("so-cart") === null) {
    setLocalStorage("so-cart", cartItems);
  } else {
    getLocalStorage("so-cart").map((item) => cartItems.push(item));
  }
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
