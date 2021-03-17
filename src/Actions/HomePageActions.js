import {NEXTDISPLAY , NEXTSUBJECT} from './types'

export const nextDisplay=()=>dispatch=>{
    return dispatch({
        type:NEXTDISPLAY
    })
}

export const nextSubject=()=>dispatch=>{
    return dispatch({
        type:NEXTSUBJECT
    })
}