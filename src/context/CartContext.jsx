import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function UseCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  function onAddToCart(data) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === data.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === data.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...data, quantity: 1 }];
      }
    });
  }

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const values = {
    cart,
    removeItem,
    decreaseQuantity,
    increaseQuantity,
    onAddToCart,
    totalPrice,
    searchItem,
    setSearchItem,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
