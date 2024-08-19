"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IProduct } from "../types/product";

interface CartContextProps {
  cartItems: IProduct[];
  addToCart: (product: IProduct, quantity?: number) => void;
  cartCount: number;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const addToCart = (product: IProduct, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedQuantity = (existingItem.quantity || 1) + quantity;

        if (updatedQuantity <= 0) {
          return prevItems.filter((item) => item.id !== product.id);
        } else {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: updatedQuantity }
              : item
          );
        }
      } else {
        return quantity > 0
          ? [...prevItems, { ...product, quantity }]
          : prevItems;
      }
    });
  };

  const cartCount = cartItems.reduce(
    (count, item) => count + (item.quantity || 1),
    0
  );
  const totalPrice = parseFloat(
    cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2)
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, cartCount, totalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
