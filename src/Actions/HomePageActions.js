import {NEXTDISPLAY} from './types'

export const nextDisplay=()=>dispatch=>{
    return dispatch({
        type:NEXTDISPLAY
    })
}