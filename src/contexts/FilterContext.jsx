import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useGlobalContext } from "./Maincontext";
import reducer from "./FilterContextReducer";

const FilteredData = createContext()
import React from 'react'

const initialState = {
  filteredJobs: [],
  copiedFilteredJobs: [],
  filters: {
    text: '',
  }
}
function FilterContext({ children }) {
  const [flag, setFlag] = useState(false)
  const { jobs } = useGlobalContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'FILTERED_DATA', payload: jobs })

  }, [jobs])
// console.log(state.filteredJobs);

  // useEffect(() => {
  //   dispatch({type:'MANIPULATING_DATA_BY_TEXT'})
  // }, [jobs , state.filters])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(!flag)
    
  }
  
  useEffect(() => {
    if (flag) {
      dispatch({ type: 'SEARCH_QUERY' })
    }
  }, [flag ,jobs, state.filters])
  
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    dispatch({ type: 'TEXT_FILTERATION', payload: { name, value } })
  }


  return (
    <FilteredData.Provider value={{ ...state, handleChange, handleSubmit,flag }}>
      {children}
    </FilteredData.Provider>
  )
}
const useFiltercontext = () => {
  return useContext(FilteredData)
}


export { FilterContext, useFiltercontext }