import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalPrice: 0,
  totalItems: 0,
  addItemToCart: (data) => {},
  removeItemFromCart: (id) => {},
  clearCart: () => {},
});

export default CartContext;
