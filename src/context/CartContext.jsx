import React from 'react';
import {useState , useContext} from 'react';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {


    const [cart , setCart] = useState([]);

     // Here , would be the logic that will be used to configure the cart.

  // Total Price
  const totalPrice = () => {
    return cart.reduce((acc, data) => (acc += data.cantidad * data.precio), 0);
  };
  // Count product
  const cantidadItem = () => {
    return cart.reduce((acc, data) => (acc += data.cantidad), 0);
  };
  // ClearCart
  const clearCart = () => setCart([]);
  // InCart
  const isInCart = (id) => (cart.find((data) => data.id === id) ? true : false);
  // Remove
  const removeProduct = (id) => setCart(cart.filter((data) => data.id !== id));

  const eliminarPorUnidad = (id) =>
    setCart(
      cart.map((data) => {
        if (data.id === id) {
          return { ...data, cantidad: data.cantidad - 1 };
        } else {
          return data;
        }
      })
    );

  // put product
  const addProduct = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((data) => {
          return data.id === item.id
            ? { ...data, cantidad: data.cantidad + cantidad }
            : data;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };








    return(
        <CartContext.Provider value={{
            cart,
            clearCart,
            addProduct,
            isInCart,
            removeProduct,
            cantidadItem,
            totalPrice,
            eliminarPorUnidad,

        }}>
            { children }
        </CartContext.Provider>
    )

}



export default CartProvider;