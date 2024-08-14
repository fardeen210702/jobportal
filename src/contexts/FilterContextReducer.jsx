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

          
              

            
        default:
            return state;
    }
}

export default FilterContextReducer