import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import jobData from '../data/Data' 
import reducer from "./MaincontextReducer";
const Data = createContext()

const initialState = {
  jobs: [],


}
function Maincontext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [flag, setFlag] = useState(true)
  const [submit,setSubmit] = useState(false)

  const URL = import.meta.env.VITE_REACT_APP_ALL_JOBS;


  async function fetchData(url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      // console.log(data, 'fetching data');
      dispatch({ type: 'JOBS', payload: data })

    } catch (error) {
      // console.log('error', error)j;
    }

  }
  useEffect(() => {
    fetchData(URL)
  }, [])


 


  function handleScrollToTop() {
    window.scrollTo(0, 0)
  }


  // session relaoding 



  useEffect(() => {

    // setFlag(false)
    let loader = sessionStorage.getItem('loading-page');
    if (loader == 'false') {
      setFlag(false)
    } else {
      setTimeout(() => {
        setFlag(false)
      }, 3000)
    }

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('loading-page', 'true')
    })

    return () => {
      window.removeEventListener('beforeunload', () => {
        sessionStorage.setItem('loading-page', 'true')
      })

    }
  }, [flag])

  

  return (
    <Data.Provider value={{ ...state, handleScrollToTop, flag }}>
      {children}
    </Data.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(Data)
}

export { Maincontext, useGlobalContext }