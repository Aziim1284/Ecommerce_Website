import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [count, setCount] = useState(1);

  const addToCart = (product, count) => {
    let updatedCart = [...cartItems];
    let existingItem = updatedCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += count;
    } else {
      updatedCart.push({ ...product, quantity: count });
    }

    updateCartState(updatedCart);
  };

  const onRemove = (productId) => {
    let updatedCart = cartItems.filter(item => item.id !== productId);
    updateCartState(updatedCart);
  };

  const toggleCartItemQuantity = (productId, value) => {
    let updatedCart = [...cartItems];
    let existingItem = updatedCart.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity = value;
    }

    updateCartState(updatedCart);
  };

  const incCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decCount = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const updateCartState = (updatedCart) => {
    setCartItems(updatedCart);
    updateTotals(updatedCart);
  };

  const updateTotals = (updatedCart) => {
    let total = 0;
    let count = 0;

    updatedCart.forEach(item => {
      total += item.price * item.quantity;
      count += item.quantity;
    });

    setTotalPrice(total);
    setTotalCount(count);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        count,
        totalCount,
        totalPrice,
        addToCart,
        onRemove,
        toggleCartItemQuantity,
        incCount,
        decCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
