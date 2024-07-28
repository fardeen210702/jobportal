import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Maincontext } from './contexts/Maincontext.jsx'
import { FilterContext } from './contexts/FilterContext.jsx'
import { PostContext } from './contexts/PostContext.jsx'
import { SaveJob } from './contexts/SaveJob.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Maincontext>
        <FilterContext>
            <PostContext>
                {/* <SaveJob> */}
                <App />
                {/* </SaveJob> */}
            </PostContext>
        </FilterContext>
    </Maincontext>

)
