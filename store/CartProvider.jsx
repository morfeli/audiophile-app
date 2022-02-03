import { useReducer, useCallback, useMemo, useState, useEffect } from "react";

import CartContext from "./cart-context";

const initialCartState = {
  items: [],
};

const actionTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
  HYDRATE: "HYDRATE",
};

const actions = {
  add: (item) => ({ type: actionTypes.ADD, item }),
  remove: (id) => ({ type: actionTypes.REMOVE, id }),
  clear: () => ({ type: actionTypes.CLEAR }),
  hydrate: (cart) => ({ type: actionTypes.HYDRATE, cart }),
};

const reducerFN = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let exisitingItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (exisitingItem) {
        let updatedItem = {
          ...exisitingItem,
          amount: exisitingItem.amount + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
      };
    }

    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    }

    case actionTypes.HYDRATE:
      return { ...action.cart };

    case "CLEAR":
      return { ...initialCartState };

    default:
      return { ...initialCartState };
  }
};

const CartProvider = (props) => {
  const [initialized, setInitialized] = useState(false);
  const [cart, dispatch] = useReducer(reducerFN, initialCartState);

  const add = useCallback((item) => {
    dispatch(actions.add(item));
  }, []);

  const remove = useCallback((id) => {
    dispatch(actions.remove(id));
  }, []);

  const clear = useCallback(() => {
    dispatch(actions.clear());
  });

  const [totalPrice, totalItems] = useMemo(() => {
    return cart.items.reduce(
      ([totalPrice, totalItems], item) => [
        totalPrice + item.price * item.amount,
        totalItems + item.amount,
      ],
      [0, 0]
    );
  }, [cart.items]);

  useEffect(() => {
    const key = "cart";

    if (initialized) {
      localStorage.setItem(key, JSON.stringify(cart));
    } else {
      const raw = localStorage.getItem(key);

      if (raw) {
        const cart = JSON.parse(raw);

        dispatch(actions.hydrate(cart));
      }

      setInitialized(true);
    }
  }, [cart, initialized]);

  const cartContext = {
    items: cart.items,
    totalPrice,
    totalItems,
    add,
    remove,
    clear,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
