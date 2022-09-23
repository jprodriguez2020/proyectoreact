import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext,
} from 'react';
import axios from 'axios';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'READ_STATE': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'ADD_ITEM_TO_CART':
      let itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      const newState = itemInCart
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
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(newState),
      };

      const url = 'http://localhost:5000/cart';

      axios(url, options);
      // const data = res.data;
      // console.log('data', data);
      return newState;

    case 'REMOVE_SINGLE_ITEM_FROM_CART':
      let itemToDeleteInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const newStateRemoveSingle =
        itemToDeleteInCart.quantity && itemToDeleteInCart.quantity > 1
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

      const optionsRemoveSingle = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(newStateRemoveSingle),
      };
      const urlRemoveSingle = 'http://localhost:5000/cart';

      axios(urlRemoveSingle, optionsRemoveSingle);
      return newStateRemoveSingle;

    case 'REMOVE_FROM_CART':
      let itemToRemoveInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      let quantityItemToRemove = itemToRemoveInCart.quantity;
      const newStateRemoveProduct = {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        cartTotal:
          state.cartTotal - action.payload.price * quantityItemToRemove,
        totalItems: state.totalItems - quantityItemToRemove,
      };

      const optionsRemoveProduct = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(newStateRemoveProduct),
      };
      const urlRemoveProduct = 'http://localhost:5000/cart';

      axios(urlRemoveProduct, optionsRemoveProduct);

      return newStateRemoveProduct;
    case 'CLEAR_CART':
      const newStateClearCart = {
        cartItems: [],
        cartTotal: 0,
        totalItems: 0,
      };
      const optionsClearCart = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(newStateClearCart),
      };
      const urlClearCart = 'http://localhost:5000/cart';

      axios(urlClearCart, optionsClearCart);
      return newStateClearCart;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, []);

  const fetchCart = async () => {
    const response = await axios.get('http://localhost:5000/cart');
    const data = await response.data;

    dispatch({ type: 'READ_STATE', payload: data });
    setIsInitialized(true);
  };

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {isInitialized ? children : null}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
