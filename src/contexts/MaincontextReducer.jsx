
function MaincontextReducer(state, action) {
  switch (action.type) {
    case 'JOBS':
        return {
            ...state,
            jobs:action.payload
        }
    case 'COMPANY_NAME':
        let companies = action.payload.map((el)=>{
            return el.employer_logo
        })
        let employerName = new Set(companies)
        const employer = Array.from(employerName)

        return {
            ...state,
            companyName:employer
        }

    case 'ANDROID_DEVLEOPER_JOBS':
        let androidDevelopers = action.payload.filter((el) =>{
            return el.job_title.includes('Android Developer')
        })
        return {
            ...state,
            androidDeveloper:androidDevelopers
        }

   
  
    default:
        return state
  }
}

export default MaincontextReducer