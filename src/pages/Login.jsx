import React from "react";
import LoginForm from '../components/LoginForm';
import "../css/login.css"

export default function Login() {
    return (
        <div className='login-page'>
            <LoginForm />
        </div>
    );
}