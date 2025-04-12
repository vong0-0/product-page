import { createContext, useReducer } from "react";

export const CartItemsContext = createContext(null);
export const CartItemsDispatch = createContext(null);

export function cartItemsReducer(cartItems, action){
  switch (action.type){
    case 'added': {
      const existingCartItem = cartItems.find(cartItem => cartItem.productName === action.productName);
      if(existingCartItem){
        return cartItems.map(cartItem =>
          cartItem.productName === action.productName
          ? {...cartItem, quantity: cartItem.quantity + action.quantity}
          : cartItem
        );
      }

      return[
        ...cartItems,
        {
          id: Math.random().toString().substring(2, 8),
          productName: action.productName,
          currentPrice: action.currentPrice,
          quantity: action.quantity
        }
      ];
    }
    case 'remove': {
      return cartItems.filter((cartItem) => cartItem.id !== action.id);
    }
    default: {
      console.warn('Unknow action: ' + action.type);
      return cartItems;
    }
  }
}

export function CartItemsProvider({ children }){
  const [cartItems, dispatch]  = useReducer(cartItemsReducer, []);
  
  return(
    <CartItemsContext.Provider value={cartItems}>
      <CartItemsDispatch.Provider value={dispatch}>
        {children}
      </CartItemsDispatch.Provider>
    </CartItemsContext.Provider>
  )
}