import {createContext} from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItemToCart: (data) => {},
    removeItemFromCart: (id) => {},
    clearCart: () => {}
});

export default CartContext;
// First we need to set our Carts Context logic. In here we are importing createContext and setting its methods.