import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import Contact from './pages/Contact'


function App() {

  return (
    <div className='flex justify-center w-full  bgColor'>
      <div className='w-full max-w-[1800px] '>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/jobs' element={<Jobs/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Router>
      </div>

    </div>
  )
}

export default App
