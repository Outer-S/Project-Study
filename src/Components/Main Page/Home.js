import React , {useEffect,useRef} from 'react';
import {nextDisplay} from '../../Actions/HomePageActions'
import {useDispatch} from 'react-redux'
import HomeDisplayUno from './HomeDisplayUno';
import HomeDisplayTwo from './HomeDisplayTwo';
import HomeDisplayThree from './HomeDisplayThree';
import facebook from '../../Assets/facebook.png'
import instagram from '../../Assets/instagram.png'
import pinterest from '../../Assets/pinterest.png'
import twitter from '../../Assets/twitter.png'
import next from '../../Assets/next.png'

function Home() {
    const dispatch= useDispatch()
    let updatePage=useRef(()=>{
        updatePage=setInterval(()=>{
            dispatch(nextDisplay())
        },3000)
    })
    const handleNext=()=>{
        dispatch(nextDisplay())
        clearInterval(updatePage)
    }
   
    useEffect(()=>{
        updatePage.current()
        return ()=>clearInterval(updatePage);
    },[dispatch,updatePage])
    
    return (
        <div id="home">
            <div id="home-display-holder">
                <HomeDisplayUno />
                <HomeDisplayTwo />
                <HomeDisplayThree />
            </div>
            <div id="home-media-holder" >
                <ul id="home-media-list">
                    <li ><a id="facebook" className="home-media" href="/"><img src={facebook} alt="facebook" /></a></li>
                    <li ><a id="instagram" className="home-media" href="/"><img src={instagram} alt="instagram" /> </a></li>
                    <li ><a id="pinterest" className="home-media" href="/"><img src={pinterest} alt="pinterest" /> </a></li>
                    <li ><a id="twitter" className="home-media" href="/"><img src={twitter} alt="twitter" /> </a></li>
                </ul>
            </div>
            <div id="home-next-button-holder">
                <button  onClick={handleNext} id="home-next-button" ><img src={next} alt="next" /></button>
            </div>
        </div>
    )
}

export default Home
