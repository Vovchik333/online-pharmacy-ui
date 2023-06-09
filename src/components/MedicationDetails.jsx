import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";
import ImageMedication from "./ImageMedication";
import "../css/medication_info.css"

export default function MedicationDetails(){
    const params = useParams();
    const id = params.id;
    const [medication, setMedication] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/medications/${id}`)
            .then(response => response.json())
            .then(json => setMedication(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {medication ? 
                <div className="medication-page">
                    <div className="medication-img">
                    <ImageMedication id={medication.id} name={medication.name} width={300} height={300}/>
                    </div>
                    <div className="details">
                        <p>Name of medication: {medication.name}</p>
                        <p>Specialization: {medication.specialization}</p>
                        <p>Manufacturer: "{medication.manufacturer}"</p>
                        <p>Price: {medication.price}<small>$</small></p>
                    </div>
                    <div className="description">
                        <h2>Description</h2> 
                        <p>{medication.description}</p>
                    </div>
                </div>
            : <LoadingAnimation />}
        </>
    );
}