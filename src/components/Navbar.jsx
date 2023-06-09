import React from "react";
import {Link} from "react-router-dom"
import "../css/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <h3 className="logo">Online Pharmacy</h3>
                <input type="checkbox" id="toggler"/>
                <label htmlFor="toggler"><FontAwesomeIcon icon={faAlignJustify} id='activate-menu'/></label>
                <div className="menu">
                    <ul className="list">
                        <li><Link to="/" className="navbar-ref">Main page</Link></li>
                        <li><Link to="login" className="navbar-ref">Log in</Link></li>
                        <li><Link to="/cart" className="navbar-ref">Cart</Link></li>
                        <li><Link to="/about" className="navbar-ref">About us</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}