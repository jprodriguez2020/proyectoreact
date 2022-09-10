import React, { useEffect, useReducer, useContext, createContext } from "react";
import axios from "axios";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {

  switch (action.type) {
    case "ADD_ITEM_TO_CART":

      let itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      return itemInCart
        ? {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            cartTotal: state.cartTotal + action.payload.price,
            totalItems: state.totalItems + 1,
          }
        : {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
            cartTotal: state.cartTotal + action.payload.price,
            totalItems: state.totalItems + 1,
          };
    case "REMOVE_SINGLE_ITEM_FROM_CART":
      let itemToDeleteInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemToDeleteInCart.quantity !== undefined) {
        return itemToDeleteInCart && itemToDeleteInCart.quantity > 1
          ? {
              ...state,
              cartItems: state.cartItems.map((item) =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
              cartTotal: state.cartTotal - action.payload.price,
              totalItems: state.totalItems - 1,
            }
          : {
              ...state,
              cartItems: state.cartItems.filter(
                (item) => item.id !== action.payload.id
              ),
              cartTotal: state.cartTotal - action.payload.price,
              totalItems: state.totalItems - 1,
            };
      }
      break;
    case "REMOVE_FROM_CART":
      let itemToRemoveInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      let quantityItemToRemove = itemToRemoveInCart.quantity;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        cartTotal:
          state.cartTotal -
          action.payload.price * quantityItemToRemove,
        totalItems: state.totalItems - quantityItemToRemove,
      };
    case "UPDATE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [initialState, setInitialState] = React.useState([]);
  useEffect(() => {
    async function fetchCart(){

      const response = await axios.get('http://localhost:5000/cart')
      const data = await response.data
      setInitialState(data)
    }
    fetchCart()

    
  }, [])
  
  console.log(initialState);
  
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
