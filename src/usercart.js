import React, { useContext } from "react";
import { CartContext } from "./context/context";

function UserCart() {
    const { cart, removeFromCart } = useContext(CartContext); // Get cart data from context

    const totalCost = cart.reduce((sum, item) => sum + item.price, 0); //total amount logic

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">

                        {cart.length === 0 ? (
                            <h3 className="text-center">Uh oh! 🛒 Your cart  is empty 😒</h3>
                        ) : (
                            <div className="cart-items">
                                {cart.map((item, index) => (
                                    <div key={index} className="cart-item">
                                        <img src={item.image} alt={item.name} width="100" height="100" />
                                        <span>{item.name} - ₹{item.price}</span>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                            ❌ Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Right Side - Payment Summary */}
                    <div className="col-6">
                        <div className="p-4 bg-white shadow rounded">
                            <h3 className="border-bottom pb-2">Order Summary</h3>

                            <>
                                {cart.map((item) => (
                                    <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
                                        <span>{item.name}</span>
                                        <span>₹{item.price}</span>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between mt-3">
                                    <h5>Total:</h5>
                                    <h5>₹{totalCost}</h5>
                                </div>
                                <button className="btn btn-danger mt-3 w-100">Proceed to Payment</button>
                            </>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserCart;

