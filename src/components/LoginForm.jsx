import React from "react";
import { Link } from 'react-router-dom';

import '../css/styles.css'

function LoginForm() {
    return (
        <div className="login-form">
            <h1>Login</h1>

            <form method="POST" id="login-send">
                <label htmlFor="username1">Username:</label>
                <input type="text" name="username" id="username1"/>

                <label htmlFor="password1">Password: </label>
                <input type="password" name="password" id="password1"/>

                <input type="submit" value="Login"/>
            </form>

            <Link to="/registration" className='reg-link'>Don't have an account?</Link>
        </div> 
    );
}

export default LoginForm;