import React from 'react'
import {useSelector} from 'react-redux'
import Display1 from '../../Assets/Display1.jpg'
import position from '../../Assets/position.png'
import write from '../../Assets/write.png'

function HomeDisplayUno() {
    const firstpage=useSelector(s=>({firstpage:s.mainpage.pageAtDisplay}))
    let selector="";
    switch(firstpage.firstpage){
        case 1:
            selector="home-display-1"
            break
        case 2:
            selector="home-display-3"
            break
        case 3:
            selector="home-display-2"
            break
        default:
            selector="home-display-1"
    }
    
    return (
        <div className="home-display" id={selector}>
            <img src={Display1} alt="Display1" id="display-1-img" />
            <h1 id="display-1-title">WE’RE HERE TO HELP YOU<br/>BECOME A BETTER STUDENT<br/>BY FINDING GOOD TEACHERS</h1>
            <ul id="display-1-inputlist">
               <li id="display-1-inputsubject">
                    <img  className="display-1-inputimage" src={write} alt="write"/>
                    <input className="display-1-input" id="display-1-inputsubject"  type="text" placeholder="Which subject? ex. Maths" />
                </li>
               <li id="display-1-inputadress">
                    <img className="display-1-inputimage" src={position} alt="position"/>
                    <input  className="display-1-input" id="display-1-inputadress" type="text" placeholder="Adress,City,..." />
                </li>
               <li>
                    <button  id="display-1-submitinput"  type="submit" >SEARCH</button>
                </li>
            </ul>
            

        </div>
    )
}

export default HomeDisplayUno
