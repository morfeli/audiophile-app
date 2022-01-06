import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const reducerFN = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };

    // let exisitingCartItemIndex = state.items.findIndex((item) => {
    //   item.id === action.item.id;
    // });
    // let exisitingCartItem = state.items[exisitingCartItemIndex];

    // let updatedItems;
    // if (exisitingCartItem) {
    //   let updatedItem = {
    //     ...exisitingCartItem,
    //     amount: exisitingCartItem.amount + action.item.amount,
    //   };
    //   updatedItems = [...state.items];
    //   updatedItems[exisitingCartItemIndex] = updatedItem;
    // } else {
    //   updatedItems = state.items.concat(action.item);
    //   // Use concat to set state in a nonmutable way. We dont want to push to the exisiting state snapshot. Concat returns a new array.
    // }
  }

  if (action.type == "REMOVE") {
    let exisitingCartItemIndex = state.items.findIndex((item) => {
      item.id === action.id;
    });
    let exisitingCartItem = state.items[exisitingCartItemIndex];

    let updatedTotalAmount = state.totalAmount - exisitingCartItem.price;

    let updatedItems;
    if (exisitingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        item.id != action.id;
      });
    } else {
      let updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return initialCartState;
  }

  return {
    initialCartState,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    reducerFN,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", item: id });
  };

  const clearCartHandler = () => {
    dispatchCartState({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
