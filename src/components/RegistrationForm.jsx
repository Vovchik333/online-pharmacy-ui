import React from "react";
import { Link } from 'react-router-dom';
import "../css/registration.css"

function RegistrationForm() {
    return (
        <div className="register-form">
            <h1>Registration</h1>

            <form method="POST" id="register-send">

                <label htmlFor="name1">Name: </label>
                <input type="text" name="name" id="name1"/>

                <label htmlFor="surname1"> Surname: </label>
                <input type="text" name="surname" id="surname1"/>

                <label htmlFor="email1">E-mail:</label>
                <input type="email" name="email" id="email1"/>

                <label htmlFor="password1">Password: </label>
                <input type="password" name="password" id="password1"/>

                <input type="submit" value="Register"/>
            </form>

            <Link to="/login" className='log-link'>Back to login</Link>
        </div> 
    );
}

export default RegistrationForm;