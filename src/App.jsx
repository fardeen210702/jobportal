import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import InterviewQuestions from './pages/InterviewQuestions'


function App() {

  return (
    <div className='flex justify-center w-full  bg-[#07081c]'>
      <div className='w-full max-w-[1800px] '>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/jobs' element={<Jobs/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/interviewquestions' element={<InterviewQuestions/>} />
          </Routes>
        </Router>
      </div>

    </div>
  )
}

export default App
