import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Maincontext } from './contexts/Maincontext.jsx'
import { FilterContext } from './contexts/FilterContext.jsx'
import { PostContext } from './contexts/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Maincontext>
        <FilterContext>
            <PostContext>
                <App />
            </PostContext>
        </FilterContext>
    </Maincontext>

)
