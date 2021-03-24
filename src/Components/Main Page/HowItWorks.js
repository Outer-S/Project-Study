import React from 'react'
import search from '../../Assets/ill_search.jpg'
import communicate from '../../Assets/ill_communicate.jpg'
import book from '../../Assets/ill_book.jpg'
import shape1 from '../../Assets/shape1.png'
import shape4 from '../../Assets/shape4.png'
import shape5 from '../../Assets/shape5.png'




function HowItWorks(){
    return (
        <div className="HIW-Container">
            <div className="text-h1"><h1>HOW IT WORKS</h1></div>
            <div className = "HIW-Holder">
                <ul className = "HIW-Cards">
                    <li className = "HIW-content" id = "HIW-Search">
                        <img src={search} alt="SEARCH"/>
                        <h2>SEARCH FOR YOUR PERFECT TEACHER</h2>
                        <p>
                            You'll find your ideal teacher among the<br/>
                            thousands who are registered on our platform.<br/>
                            He or she will tailor the course to your needs<br/>
                            and help you to achieve your goals.
                        </p>
                    </li>
                    <li className = "HIW-content" id = "HIW-Communicate">
                        <img src={communicate} alt="COMMUNICATE"/>
                        <h2>COMMUNICATE</h2>
                        <p>
                        Once you've identified a few potential
                        teachers, <br/>if you have questions before your<br/>
                        first lesson, send them emails to discuss<br/>
                        scheduling and any other questions you might have.
                        </p>
                    </li>
                    <li className = "HIW-content" id = "HIW-Book">
                    <img src={book} alt="BOOK"/>
                        <h2>BOOK YOUR CLASS</h2>
                        <p>
                        Booking your class is easy, after you communicate<br/>
                        with your perfect teacher you can click on<br/>
                        “request a booking” button on a class page to send<br/>
                        the teacher a formal reservation request.
                        </p>
                    </li>
                </ul>
            </div>
                <div class="shape shapeAnimationOne l-10 t-60">
                    <img src={shape1}  alt="Shape"/>
                </div>
                <div class="shape shapeAnimationTwo l-10 t-5">
                    <img src={shape4}  alt="Shape"/>
                </div>
                <div class="shape shapeAnimationThree r-10 t-100">
                    <img src={shape5} alt="Shape"/>
                </div> 

                <div className= "separator">
                </div>
        </div>
    )
}

export default HowItWorks