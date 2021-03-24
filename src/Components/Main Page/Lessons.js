import React from 'react'
import local_les from '../../Assets/les_local.jpg'
import online_les from '../../Assets/les_online.jpg'

export default function Lessons (){
    return (
        <div className = "Lesson-Container">
        <h1 className ="connect">CONNECT LOCALLY OR ONLINE</h1>
        <div className="Lessons-Section">
            <div className="Local">
                <img src={local_les} alt="Local Lessons"/>
                <h1>LOCAL LESSONS</h1>
                <p>
                    No matter where you live, we can introduce you <br/>
                    to an amazing teacher in your neighborhood. <br/>
                    You can take lessons in the privacy of your
                    own<br/>home or at your teacher's location or cafe, ...
                </p>
            </div>
            <div className="Online">
                <img src={online_les} alt="Online Lessons"/>
                <h1>ONLINE LESSONS</h1>
                <p>
                    Is your dream teacher on the other side of the<br/>
                    city or country? No problem. Now, you can meet your<br/>
                    teacher online on your smartphone or laptop. The world<br/>
                    is your classroom.
                </p>
            </div>
            
        </div>
        <div className= "separator">
        </div>
        </div>
    )
}