import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import jobData from '../data/Data' 
import reducer from "./MaincontextReducer";
const Data = createContext()

const initialState = {
  jobs: [],
  filteredSearch:false,


}
function Maincontext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [flag, setFlag] = useState(true)
  const [filtered, setFiltered] = useState(false)
  const [filteredSearchURL, setFilteredSearchURL] = useState('');
  

  function handleScrollToTop() {
    window.scrollTo(0, 0)
  }


  // session relaoding

  useEffect(() => {
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
    <Data.Provider value={{ ...state, handleScrollToTop, flag , filtered, setFiltered, filteredSearchURL, setFilteredSearchURL}}>
      {children}
    </Data.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(Data)
}

export { Maincontext, useGlobalContext }