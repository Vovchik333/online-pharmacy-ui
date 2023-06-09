import React from "react";
import "../css/loading.css"

export default function LoadingAnimation(){
    return (
        <div className="loading-page">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}