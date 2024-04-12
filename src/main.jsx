import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Maincontext } from './contexts/Maincontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Maincontext>
    <App />
    </Maincontext>
 
)
