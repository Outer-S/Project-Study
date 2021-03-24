import {NEXTDISPLAY} from '../Actions/types';

let initialState={
    pageAtDisplay:1,
    subjectAtDisplay:0
}

export default function mainPageReducer(state=initialState, action){
    switch(action.type){
        case NEXTDISPLAY:
            if(state.pageAtDisplay>=3)
                return{...state,pageAtDisplay:1}
            else{
                return{...state,pageAtDisplay:state.pageAtDisplay+1}
            }
        default:
            return state
    }
}