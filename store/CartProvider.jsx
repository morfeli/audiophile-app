import {useReducer, useState} from "react";
import {CartContext} from "./cart-context"

const initialCartState = {
    items: [],
    totalAmount: 0
}


const reducerFN = (state, action) => {
    if (action.type == "ADD") {

        let updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        let exisitingCartItemIndex = state.items.findIndex((item) => {item.id === action.item.id});
        let exisitingCartItem = state.items[exisitingCartItemIndex];

        let updatedItems;
        if (exisitingCartItem) {
            let updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount + action.item.amount;
            }
            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount;
        }
    };

    if (action.type == "REMOVE") {

        let exisitingCartItemIndex = state.items.findIndex((item) => {item.id === action.id});
        let exisitingCartItem = state.items[exisitingCartItemIndex];

        let updatedTotalAmount = state.totalAmount - exisitingCartItem.price;

        let updatedItems;   
        if (exisitingCartItem.amount === 1) {
          updatedItems = state.items.filter((item) => {
                item.id != action.id
            });
        } else {
            let updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount - 1
            }

            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    };

    if (action.type = "CLEAR") {
        return initialCartState;
    }

    return {
        initialCartState;
    }

};

const CartProvider = () => {
const [cartState, dispatchCartState] = useReducer(reducerFN, initialCartState);

const addItemToCartHandler = (item) => {
    dispatchCartState({type: "ADD", item : item})
};


const removeItemFromCartHandler = (id) => {
    dispatchCartState({type: "REMOVE", item: id})
};

const clearCartHandler = () => {
    dispatchCartState({type: "CLEAR"})
};


const CartContext = {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    clearCart: clearCartHandler
};

return (
    <CartContext.Provider value={CartContext}>
       {props.children}
    </CartContext.Provider>
)
};