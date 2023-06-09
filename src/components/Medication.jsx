import React from "react";

export default function Medication({medication}){

    return (
        <div>
            <p>Name: {medication.name}</p>
            <p>Price: 
                <strong> {medication.price}</strong>
                <small>$</small>
            </p>
        </div>
    );
}