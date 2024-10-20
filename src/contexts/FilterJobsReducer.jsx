import { useGlobalContext } from "./Maincontext";

function FilterJobsReducer(state,action) {
    switch (action.type) {
        case 'FILTERALLJOBS':
            let {filtered} = useGlobalContext();
            if(!filtered){
                return {
                    ...state,
                    allJobs: [...state.allJobs, ...action.payload]
                }
            }else{
                return {
                    allJobs:[...action.payload]
                }
            }

        default:
            return state
    
    }
  
}

export default FilterJobsReducer
