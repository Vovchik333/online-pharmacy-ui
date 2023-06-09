import React from "react";
import { useDispatch } from 'react-redux';
import {decrementQuantity, incrementQuantity, removeItem} from "../components/redux/cartSlice"
import ImageMedication from "./ImageMedication";
import "../css/cart.css"

export default function CartItem({medication}){
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <div className="img-med">
                <ImageMedication id={medication.id} name={medication.name} width={200} height={200}/>
            </div>
            <div className="item-container"><p className="text-par">{medication.name}</p></div>
            <div className="item-container">
                <p className="text-par">Price: 
                    <strong> {medication.price}</strong>
                    <small>$</small>
                </p>
            </div>
            <div className="item-container">
                <div className='inc-dec-quantity'>
                    <button onClick={() => dispatch(decrementQuantity(medication.id))}>-</button>
                    <p>{medication.quantity}</p>
                    <button onClick={() => dispatch(incrementQuantity(medication.id))}>+</button>
                </div>
            </div>
            <div className="item-container">
                <button
                    className='remove-button' 
                    onClick={() => dispatch(removeItem(medication.id))}>
                    Remove
                </button>
            </div>
        </div>
    );
}