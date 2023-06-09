import React from "react";
import { useSelector } from "react-redux";
import "../css/order.css"
import Total from "../components/Total"
import ImageMedication from "../components/ImageMedication"

export default function OrderForm(){
    const cart = useSelector((state) => state.cart);

    function sendOrder() {
        const jsonOrder = createJsonOrder();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonOrder
        };
        fetch('http://localhost:8080/orders', requestOptions)
            .then(response => response.json());

    }

    function createJsonOrder(){
        const name = document.getElementById("name-input").value;
        const surname = document.getElementById("surname-input").value;
        const email = document.getElementById("email-input").value;
        const state = document.getElementById("state-input").value;
        const city = document.getElementById("city-input").value;
        const address = document.getElementById("address-input").value;
        const cardNum = document.getElementById("card-input").value;
        let totalPrice = 0
        cart.forEach(item => {
            totalPrice += item.price * item.quantity
        })

        const medicalProducts = createMedicalProducts();

        return JSON.stringify(
            {
                id: '',
                medicalProducts: medicalProducts,
                name: name,
                surname: surname,
                email: email,
                state: state,
                city: city,
                address: address,
                cardNumber: cardNum,
                totalPrice: totalPrice
            }
        );
    }

    function createMedicalProducts(){
        const medicalProducts = cart.map(item => {
            const copyItem = Object.assign({}, item);
            const quantity = copyItem.quantity;
            delete copyItem.quantity;
            
            return {
                medication: copyItem,
                quantity: quantity,
                sumPrice: (copyItem.price * quantity)
            }
        });

        return medicalProducts;
    }

    return (
        <div className="order-page">
            <div className="info-panel">
                <label htmlFor="name-input">Type name:</label>
                <input type="text" id="name-input"/>

                <label htmlFor="surname-input">Type surname:</label>
                <input type="text" id="surname-input"/>

                <label htmlFor="email-input">Type e-mail:</label>
                <input type="email" id="email-input"/>

                <label htmlFor="state-input">Type state:</label>
                <input type="text" id="state-input"/>

                <label htmlFor="city-input">Type city:</label>
                <input type="text" id="city-input"/>

                <label htmlFor="address-input">Type address:</label>
                <input type="text" id="address-input"/>

                <label htmlFor="card-input">Type number of card:</label>
                <input type="text" id="card-input"/>
                
                <button onClick={() => sendOrder()}>Confirm order</button>
            </div>
            <div className="cart-items">
                {cart.map(item => (
                    <div>
                        <ImageMedication id={item.id} name={item.name} width={100} height={100}/>
                        <p>{item.name}</p>
                        <p>{item.quantity} packs</p>
                    </div>
                ))}
                <Total></Total>
            </div>
        </div>
    );
}