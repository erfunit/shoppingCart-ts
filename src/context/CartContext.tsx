import {createContext, useContext, ReactNode, useState} from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage';

type CartProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: number;
    qty: number;
}

type CartContext = {
    getItemQty: (id: number) => number;
    addItemCount: (id: number) => void;
    decreaseItemCount: (id: number) => void;
    removeItem: (id: number) => void;
    cartQty: number;
    cartItems: CartItem[];
}

const CartContext = createContext({} as CartContext)

export function useCartContext() {
    return useContext(CartContext)
}

export default function CartContextProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart-items', []);
  
    function getItemQty(id: number): number {
      return (cartItems.find((item) => item.id === id) || { qty: 0 }).qty;
    }
  
    function addItemCount(id: number) {
      console.log('adding item count');
      setCartItems((currentCart) => {
        if (currentCart.find((item) => item.id === id) == null) {
          return [...currentCart, { id, qty: 1 }];
        } else {
          return currentCart.map((item) => {
            if (item.id === id) {
              return { ...item, qty: item.qty + 1 };
            } else {
              return item;
            }
          });
        }
      });
    }
  
    function decreaseItemCount(id: number) {
      setCartItems((currentCart) => {
        if ((currentCart.find((item) => item.id === id) || { qty: 0 }).qty === 1) {
          return currentCart.filter((item) => item.id !== id);
        } else {
          return currentCart.map((item) => {
            if (item.id === id) {
              return { ...item, qty: item.qty - 1 };
            } else {
              return item;
            }
          });
        }
      });
    }
  
    function removeItem(id: number) {
      setCartItems((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    }
  
    const cartQty = cartItems.reduce((prev, item) => item.qty +prev,0)

    return (
      <CartContext.Provider
        value={{ getItemQty, addItemCount, decreaseItemCount, removeItem, cartQty, cartItems }}
      >
        {children}
      </CartContext.Provider>
    );
  }
  