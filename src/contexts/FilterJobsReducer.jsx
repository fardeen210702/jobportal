
function FilterJobsReducer(state,action) {
    switch (action.type) {
        case 'FILTERALLJOBS':
            return {
                ...state,
                allJobs: [...state.allJobs, ...action.payload]
            }



        default:
            return state
    
    }
  
}

export default FilterJobsReducer
