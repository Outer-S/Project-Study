import React from 'react'
import school from '../../Assets/school.png'

function Navigation() {
    return (
        <div id="navigation">
            <div id="navigation-icon-container">
                <img id="navigation-icon" src={school} alt="school "  />
            </div>
            <div id="navigation-buttons-container">
                <ul id="navigation-buttons-list">
                    <li><a href="/" id="sign-in" className="navigation-button">Sign In</a></li>
                    <li><a href="/" id="sign-up" className="navigation-button">Sign Up </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation