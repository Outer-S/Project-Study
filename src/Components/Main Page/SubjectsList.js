import React ,{useEffect ,useRef} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {nextSubject} from '../../Actions/HomePageActions'
import physics from '../../Assets/physics.png'
import write from '../../Assets/write.png'
import math from '../../Assets/math.png'
import economy from '../../Assets/economy.png'
import list from '../../Assets/list.png'
import programing from '../../Assets/programing.png'

function SubjectsList() {
    let dispatch=useDispatch()
    let updateSubject=useRef(()=>{updateSubject=setInterval(()=>{
                dispatch(nextSubject())
            },3000)
        }
    )

    useEffect(()=>{
        updateSubject.current()
        return ()=>{
            clearInterval(updateSubject)
        }
    },[dispatch,updateSubject])

    let subject =useSelector(s=>({page:s.mainpage.subjectAtDisplay}))    
    
    let displaySubject='subjects-rotation-0'
    
    switch(subject.page){
        case 0:
            displaySubject='subjects-rotation-0'
            break
        case 1:
            displaySubject='subjects-rotation-1'
            break
        case 2:
            displaySubject='subjects-rotation-2'
            break
        case 3:
            displaySubject='subjects-rotation-3'
            break
        default:
            break
    }
    
    return (
        <div id="subjects">
            <div id="subjects-list-container">
                <ul  className="subjects-list-class" id={displaySubject}>
                    <li id="subject"><img className="subject-img" src={list} alt="all"/><h1 className="subject-tilte">All</h1></li>
                    <li id="subject"><img className="subject-img"  src={math} alt="maths" /> <h1 className="subject-tilte">Maths</h1></li>
                    <li id="subject"><img className="subject-img"  src={physics} alt="physics" /><h1 className="subject-tilte">Physics</h1></li>
                    <li id="subject"><img className="subject-img"  src={write} alt="literature"/><h1 className="subject-tilte">Literature</h1></li>
                    <li id="subject"><img className="subject-img"  src={economy} alt="economy"/><h1 className="subject-tilte">Economy</h1></li>
                    <li id="subject"><img className="subject-img"  src={programing} alt="programing"/><h1 className="subject-tilte">Programing</h1></li>
                </ul>
            </div>
        </div>
    )
}

export default SubjectsList