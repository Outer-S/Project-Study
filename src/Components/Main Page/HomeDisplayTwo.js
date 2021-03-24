import React from 'react'
import {useSelector} from 'react-redux'
import Display2 from '../../Assets/Display2.png';

function HomeDisplayTwo() {
    const secondpage=useSelector(s=>({secondpage:s.mainpage.pageAtDisplay}))
    let selector="";
    switch(secondpage.secondpage){
        case 1:
            selector="home-display-2"
            break
        case 2:
            selector="home-display-1"
            break
        case 3:
            selector="home-display-3"
            break
        default:
            selector="home-display-2"
    }
    return (
        <div className="home-display" id={selector}>
            <img src={Display2} alt="Display1" id="display-1-img" />
            <h1 id="display-2-title">A HAND FOR YOUR KID<br/>A BREAK FOR YOUR BRAIN</h1>
            <div id="hero-buttons-container">
                <ul id="hero-buttons-list">
                    <li><a href="/" id="join-us" className="hero-navigation-button">JOIN US</a></li>
                    <li><a href="/" id="for-parents" className="hero-navigation-button">DISCOVER STUDER FOR PARENTS</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeDisplayTwo
