import React, { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import type { CartState, CartAction } from '../types/cart';

const initialState: CartState = {
  items: [],
  total: 0,
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}