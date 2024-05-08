import React from 'react'

function PostContextReducer(state,action) {
 switch (action.type) {
    case 'FILL_DETAILS':
        let {name , value} = action.payload
        return{
            ...state,
            [name]:value,
        }
        
        break;
 
    default:
       return state;
 }
}

export default PostContextReducer