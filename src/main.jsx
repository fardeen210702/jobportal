import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Maincontext } from './contexts/Maincontext.jsx'
import { FilterContext } from './contexts/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Maincontext>
        <FilterContext>

    <App />
        </FilterContext>
    </Maincontext>
 
)
