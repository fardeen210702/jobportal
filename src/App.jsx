import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'


function App() {

  return (
    <div className='flex justify-center w-full  bg-[#fff0eb]'>
      <div className='w-full max-w-[1800px] '>
        <Router>
          <Header />
          <Routes>
            <Route path='/home' element={<Home/>} />
          </Routes>
        </Router>
      </div>

    </div>
  )
}

export default App
