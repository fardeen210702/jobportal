import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useGlobalContext } from "./Maincontext";
import reducer from "./FilterContextReducer";

const FilteredData = createContext()
import React from 'react'

const initialState = {
  filteredJobs: [],
  copiedFilteredJobs: [],
 
}
function FilterContext({ children }) {
  // const { jobs } = useGlobalContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  // useEffect(() => {
  //   dispatch({ type: 'FILTERED_DATA', payload: jobs })

  // }, [jobs])


  
  const handleSubmit = (e) => {
    e.preventDefault();
 
    
  }
  
  
  
 


  return (
    <FilteredData.Provider value={{ ...state,handleSubmit }}>
      {children}
    </FilteredData.Provider>
  )
}
const useFiltercontext = () => {
  return useContext(FilteredData)
}


export { FilterContext, useFiltercontext }