import React from "react";
import { Link } from "react-router-dom";
import amigren from "../images/amigren.jpg";
import aspirin from "../images/aspirin.jpg";
import atorvastatin from "../images/atorvastatin.jpg";
import bisoprolol from "../images/bisoprolol.jpg";
import citramon from "../images/citramon.jpg";
import clopidogrel from "../images/clopidogrel.jpg";
import domperidone from "../images/domperidone.jpg";
import elptan from "../images/elptan.jpg";
import enalapril from "../images/enalapril.jpg";
import nurofen from "../images/nurofen.jpg";
import omeprazole from "../images/omeprazole.jpg";
import pantoprazole from "../images/pantoprazole.jpg";
import paracetamol from "../images/paracetamol.jpg";
import phosphalugel from "../images/phosphalugel.jpg";
import ranitidine from "../images/ranitidine.jpg";

export default function ImageMedication(props){
    const mapImages = {
        "Amigren": amigren,
        "Aspirin": aspirin,
        "Atorvastatin": atorvastatin,
        "Bisoprolol": bisoprolol,
        "Citramon": citramon,
        "Clopidogrel": clopidogrel,
        "Domperidone": domperidone,
        "Elptan": elptan,
        "Enalapril": enalapril,
        "Nurofen": nurofen,
        "Omeprazole": omeprazole,
        "Pantoprazole": pantoprazole,
        "Paracetamol": paracetamol,
        "Phosphalugel": phosphalugel,
        "Ranitidine": ranitidine
    };

    return (
        <>
            <Link to={`/medications/${props.id}`}>
                <img src={mapImages[props.name]} alt="" width={props.width} height={props.height}/>
            </Link>
        </>
    );
}