import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import CartItem from "./CartItem";
import Total from "./Total";
import "../css/cart.css"

export default function ShoppingCart(){
    const cart = useSelector((state) => state.cart);

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total;
    }

    return (
        <div className="cart-page">
            <div className="ordering-panel">
                <div className="total">
                    <h3>Total quantity: {getTotalQuantity()}</h3>
                    <Total />
                </div>
                <Link to="/orders" className="to-order">Order</Link>
            </div>
            <ul className="cart-item-list">
                {cart.map(cartMedication => (
                    <li key={cartMedication.id} className="cart-elem">
                        <CartItem medication={cartMedication}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}