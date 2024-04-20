import { createContext, useContext, useEffect, useReducer } from "react";
// import jobData from '../data/Data' 
import reducer from "./MaincontextReducer";
const Data = createContext()

const initialState= {
    // companyName:[],
    jobs:[],
    // androidDeveloper :[],
    // frontendDeveloper:[],
    // backendDeveloper:[],
    // projectManager:[],
    // uiuxDesigner:[],
    // gameDeveloper:[],
    // reactNative:[],
    // softwareTester:[],
    // hr:[],
    // dataAnalyst:[],
    // fullStack:[],
    // pythonDeveloper:[],
    // javaDeveloper:[],
}
function Maincontext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const URL = 'https://job-server-66141ed39513.herokuapp.com/api/v1/job-finder/jserver/all-jobs';
  // const  options = {
  //   headers :{

  //   }
  // }

  async function fetchData(url){
  try {
      const res  = await fetch(url)
      const data = await res.json()
      console.log(data,'fetching data');
      dispatch({type:'JOBS', payload: data})

  } catch (error) {
    console.log('error', error);
  }

  }
  useEffect(() => {
   fetchData(URL)
  }, [])
  



console.log(state.jobs, 'statejobs');
// console.log(state.androidDeveloper, 'android');
// console.log(state.companyName, 'companyName');


// useEffect(() => {
//   dispatch({type:'JOBS', payload: jobData})
// }, [])




function handleScrollToTop(){
window.scrollTo(0,0)
}


    return (
        <Data.Provider value={{...state , handleScrollToTop}}>
            {children}
        </Data.Provider>
    )
}
const useGlobalContext =()=>{
    return useContext(Data)
}

export  {Maincontext , useGlobalContext}