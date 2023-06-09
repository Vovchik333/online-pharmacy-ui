import React,  {useState, useEffect} from "react";
import Medication from "./Medication";
import ImageMedication from "./ImageMedication";
import { useDispatch } from 'react-redux';
import {addToCart} from '../components/redux/cartSlice';
import "../css/all_medications.css"
import LoadingAnimation from "./LoadingAnimation";

export default function AllMedications() {
    const dispatch = useDispatch();
    const [medications, setMedications] = useState(null);
    const [inputMedication, setInputMedication] = useState("");

    useEffect(() => {
        fetch('http://localhost:8080/medications')
            .then(response => response.json())
            .then(json => setMedications(json))
            .catch(error => console.error(error));
    }, []);

    function getAllMedications(medications){
        return (
            medications.map(medication => 
                <li className="medication" key={medication.id}>
                    <div className="image-med">
                        <ImageMedication id={medication.id} name={medication.name} width={200} height={200}/>
                    </div>
                    <Medication medication={medication}/>
                    <button 
                        onClick={() => {
                            medication = Object.assign({}, medication, { quantity: 0 });
                            dispatch(addToCart(medication));
                            window.alert(`${medication.name} has been added to your shopping cart. Go to your cart to place an order.`);
                        }
                        } className="button-buy">Buy
                    </button>
                </li>
            )
        );
    }

    function getMedicationFromQuery(medications){
        const filteredMedications = medications.filter(medication =>
            medication.name.toLowerCase().includes(inputMedication.toLowerCase())
        );
        
        return (
            filteredMedications.map(medication => (
                <li className="medication" key={medication.id}>
                    <div className="image-med">
                    <ImageMedication id={medication.id} name={medication.name} width={200} height={200}/>
                    </div>
                    <Medication medication={medication}/>
                    <button 
                        onClick={() => {
                            medication = Object.assign({}, medication, { quantity: 0 });
                            dispatch(addToCart(medication));
                            window.alert(`${medication.name} has been added to your shopping cart. Go to your cart to place an order.`);
                        }
                        } className="button-buy">Buy
                    </button>
                </li>
            ))
        );
    }

    function setInputQuery(){
        let searchQuery = document.getElementById("search-input").value;
        setInputMedication(searchQuery);
    }

    return (
        <>
            {medications ? 
                <div className="medications-page">
                    <div className="search-panel">
                        <input 
                            type="text" 
                            id="search-input" 
                            placeholder="Input name of medication"
                        />
                        <button onClick={setInputQuery} className="search-btn">Search</button>
                    </div>
                    <ul className="list-medications">
                        {
                            inputMedication === "" 
                            ? getAllMedications(medications)
                            : getMedicationFromQuery(medications)
                        }
                    </ul>
                </div>
            : <LoadingAnimation />}
        </>
    );
}
