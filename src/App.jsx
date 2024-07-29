import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Jobs from './pages/jobs/Jobs'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import InterviewQuestions from './pages/InterviewQuestions'
import Publishjobs from './pages/jobs/Publishjobs'
import JobDetails from './pages/jobs/JobDetails'
import Error from './pages/Error'



function App() {

  return (
    <div className='flex justify-center w-full  bg-[#f6f5fa] text-black '>


      <div className='w-full max-w-[1800px] '>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/jobs' element={<Jobs/>} />
            <Route path='/jobs/publish-jobs' element={<Publishjobs/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact/>} />
            {/* <Route path='/savedjobs' element={<SavedJobs/>} /> */}
            <Route path='/interview-questions' element={<InterviewQuestions/>} />
            <Route path='/jobs/:id' element={<JobDetails/>} />
            <Route path='*' element={<Error/>} />

          </Routes>
        </Router>
      </div>

    </div>
  )
}

export default App
