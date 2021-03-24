import React from 'react'
import logo from '../../Assets/Logo.png'

function Navigation() {
    return (
        <div id="navigation">
            <div id="navigation-icon-container">
            <a href="/"><img id="navigation-icon" src={logo} alt="school "  /></a>
            </div>
            <div id="navigation-buttons-container">
                <ul id="navigation-buttons-list">
                    <li><a href="/" id="sign-in" className="navigation-button">LOG IN</a></li>
                    <li><a href="/" id="sign-up" className="navigation-button">SIGN UP</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation