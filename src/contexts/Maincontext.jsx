import { createContext, useContext, useEffect, useReducer,useState } from "react";
// import jobData from '../data/Data' 
import reducer from "./MaincontextReducer";
const Data = createContext()

const initialState= {
    jobs:[],
}
function Maincontext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const URL = 'https://job-server-66141ed39513.herokuapp.com/api/v1/job-finder/jserver/all-jobs';


  async function fetchData(url){
  try {
      const res  = await fetch(url)
      const data = await res.json()
    //  console.log(data,'fetching data');
      dispatch({type:'JOBS', payload: data})

  } catch (error) {
    // console.log('error', error)j;
  }

  }
  useEffect(() => {
   fetchData(URL)
  }, [])


function handleScrollToTop(){
window.scrollTo(0,0)
}


// session relaoding 

const [flag,setFlag] = useState(true)


useEffect(()=>{
let loader =sessionStorage.getItem('loading-page');
if(loader ==='false'){
setFlag(false)
}else{
setTimeout(()=>{
  setFlag(false)
  sessionStorage.setItem('loading-page','false')
 },3000)
}

window.addEventListener('beforeunload',()=>{
sessionStorage.setItem( 'loading-page','true')
})

return ()=>{
window.removeEventListener('beforeunload',()=>{
  sessionStorage.setItem( 'loading-page','true')
})

}


},[flag])

    return (
        <Data.Provider value={{...state , handleScrollToTop , flag}}>
            {children}
        </Data.Provider>
    )
}
const useGlobalContext =()=>{
    return useContext(Data)
}

export  {Maincontext , useGlobalContext}