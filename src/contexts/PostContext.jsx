import { createContext, useContext, useReducer, useState } from "react";
import reducer from "./PostContextReducer";
const PostData = createContext()
import React from 'react'

const initialState = {
    name:'',
    email:'',
    employer_name:'',
    employer_logo:'',
    employer_website:'',
    job_title:'',
    job_apply_link:'',
    job_country:'',
    job_city:'',
    job_employment_type:'',
    job_is_remote_yes:'',
    job_is_remote_no:'',
    job_max_salary:'',
    job_min_salary:'',
    job_posted_at_datetime_utc:"",
    job_offer_expiration_datetime_utc:'',
    job_required_experience: '',
    job_required_skills:'',
    job_description:'',
    job_responsibilities:'',
    job_benefits:'',
    job_qualifications:'',
}

function PostContext({children}) {
    const [postDataList, setPostDataList] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialState)
    
    function handleChange(e){
      let name=e.target.name;
      let value=e.target.value;
      dispatch({type:'FILL_DETAILS' , payload:{name,value}})
    }
    function handleSubmit(e){
      e.preventDefault();
      setPostDataList([...postDataList, state])
      console.log(postDataList);
    }
  return (
    <PostData.Provider value={{...state, handleChange , handleSubmit}}>{children}</PostData.Provider>
  )
}

const usePostDataContext = ()=>{
    return useContext(PostData)
}

export  {PostContext, usePostDataContext}