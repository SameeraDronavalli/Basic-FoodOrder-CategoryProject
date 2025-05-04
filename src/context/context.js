import React,{ createContext, useState } from "react";
// Create Context
export const CartContext = createContext(); // This context will store and manage the cart's state, so all components in the app can access it.
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Cart state

    // Add to Cart function
    const addToCart = (item) => {  // addToCart  takes an item as a parameter.It updates the cart state by adding the new item to the existing list (cart)
        setCart([...cart, item]);  //setCart([...cart, item]) spreads the previous items and adds the new one.
    };
    // Remove from Cart function
    const removeFromCart = (itemId) => { //removeFromCart takes an itemId as input.
        setCart(cart.filter((item) => item.id !== itemId)); // cart.filter((item) => item.id !== itemId) removes the item with the matching id from the cart.
    };
    return ( // "Provider" is provides the cart, addToCart, and removeFromCart functions to all child components.
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}    {/*  If i given RestaurentMenu component instead of {children} Only this component will be rendered ,React knows that {children} means "render everything inside the provider."*/}
        </CartContext.Provider>
    );
};
