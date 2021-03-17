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
            <h1 id="display-1-title">We're here to help you <br/> Become a Good Student <br/> By Finding a Good Teacher</h1>
        </div>
    )
}

export default HomeDisplayTwo