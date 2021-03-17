import React from 'react'
import {useSelector} from 'react-redux'
import Display2 from '../../Assets/Display2.jpg';

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
            <h1 id="display-1-title">We're here to help you <br/> Become a Good Student <br/> By Finding a Good Teacher</h1>
            
        </div>
    )
}

export default HomeDisplayTwo
