import React, {useReducer, useContext, createContext} from 'react'

export const PRODUCTS = [
    {
        id: 1,
        name: 'Product 1',
        price: 10,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 20,
        image: 'https://via.placeholder.com/155'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 30,
        image: 'https://via.placeholder.com/160'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 40,
        image: 'https://via.placeholder.com/165'
    },
    {
        id: 5,
        name: 'Product 5',  
        price: 50,
        image: 'https://via.placeholder.com/170'
    },
    {
        id: 6,
        name: 'Product 6',
        price: 60,
        image: 'https://via.placeholder.com/175'
    }
];


const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                cartTotal: state.cartTotal + action.payload.price,
                totalItems: state.totalItems + 1
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
                cartTotal: state.cartTotal - action.payload.price,
                totalItems: state.totalItems - 1
            }
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item
                    }
                })
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
};

const initialState = {
    cartItems: [],
    totalItems: 0,
    cartTotal: 0
};

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartStateContext.Provider value={cart}>
        <CartDispatchContext.Provider value={dispatch}>
            {children}
        </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
    }


export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);