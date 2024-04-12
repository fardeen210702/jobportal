import { createContext, useContext, useEffect, useReducer } from "react";
import jobData from '../data/Data' 
import reducer from "./MaincontextReducer";
const Data = createContext()


const initialState= {
    companyName:[],
    jobs:[],
    androidDeveloper :[],
    frontendDeveloper:[],
    backendDeveloper:[],
    projectManager:[],
    uiuxDesigner:[],
    gameDeveloper:[],
    reactNative:[],
    softwareTester:[],
    hr:[],
    dataAnalyst:[],
    fullStack:[],
    pythonDeveloper:[],
    javaDeveloper:[],


}

function Maincontext({ children }) {

const [state, dispatch] = useReducer(reducer, initialState)
console.log(state.jobs, 'statejobs');
// console.log(state.androidDeveloper, 'android');
console.log(state.companyName, 'companyName');


useEffect(() => {
  dispatch({type:'JOBS', payload: jobData})
}, [])

useEffect(() => {
  dispatch({type:'ANDROID_DEVLEOPER_JOBS', payload: jobData})
}, [])

useEffect(() => {
  dispatch({type:'COMPANY_NAME', payload: jobData})
}, [])






    return (
        <Data.Provider value={{...state}}>
            {children}
        </Data.Provider>
    )
}
const useGlobalContext =()=>{
    return useContext(Data)
}

export  {Maincontext , useGlobalContext}