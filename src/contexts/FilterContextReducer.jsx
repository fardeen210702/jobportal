import React from 'react'

function FilterContextReducer(state, action) {
    switch (action.type) {
        case 'FILTERED_DATA':
            return {
                ...state,
                filteredJobs: [...action.payload],
                copiedFilteredJobs: [...action.payload],
            }
        case 'TEXT_FILTERATION':
            let {name ,value} = action.payload
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]: value
                }
                
            }

            case 'SEARCH_QUERY':
                const {copiedFilteredJobs} = state;
                let newCopiedList = [...copiedFilteredJobs];
                let {text} = state.filters;

            if(text){
                newCopiedList = newCopiedList.filter((el)=>{
                    return el.job_title.toLowerCase().includes(text)
                })
            }
            
            return {
                ...state,
                filteredJobs:newCopiedList
                
            }

            
        default:
            return state;
    }
}

export default FilterContextReducer