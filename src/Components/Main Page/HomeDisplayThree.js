import React from 'react'
import {useSelector} from 'react-redux'
import Display3 from '../../Assets/Display3.jpg';

function HomeDisplayTwo() {
    const thirdpage=useSelector(s=>({thirdpage:s.mainpage.pageAtDisplay}))
    let selector="";
    switch(thirdpage.thirdpage){
        case 1:
            selector="home-display-3"
            break
        case 2:
            selector="home-display-2"
            break
        case 3:
            selector="home-display-1"
            break
        default:
            selector="home-display-3"
    }
    return (
        <div className="home-display" id={selector}>
            <img src={Display3} alt="Display1" id="display-1-img" />
            <h1 id="display-3-title">GOOD TEACHERS HAVE THE EXPERTISE<br/>AND KNOWLEDGE TO TEACH STUDENTS<br/>WITH US THEY CAN REACH MORE STUDENTS</h1>
            <ul id="hero-buttons-list">
                    <li><a href="/" id="teacher-join-us" className="hero-navigation-button">JOIN US AND GET YOUR TEACHER ACCOUNT</a></li>
                </ul>
        </div>
    )
}

export default HomeDisplayTwo