import React from 'react'
import shape1 from '../../Assets/shape1.png'
import shape2 from '../../Assets/shape2.png'
import shape3 from '../../Assets/shape3.png'






function JoinUs (){
    return (
        <div className ="JoinUs-Container">
            <div className="JoinUs-Text">
                <h1>JOIN US ON A JOURNEY<br/>TO BECOME A BETTER STUDENT</h1>
                <h2>Sign up now and find your teacher</h2>
                <a href="/"><button className="button"><span>JOIN US </span></button></a>  
                <div className="shape shapeAnimationOne l-10 t-60">
                    <img src={shape1}  alt="Shape"/>
                </div>
                <div className="shape shapeAnimationTwo l-70 t-60">
                    <img src={shape2}  alt="Shape"/>
                </div>
                <div className="shape shapeAnimationThree l-50 t-100">
                    <img src={shape3} alt="Shape"/>
                </div> 
            </div>    
              
        </div>
    )
}

export default JoinUs