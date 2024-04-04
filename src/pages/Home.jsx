import Loop from '../components/Loop'
import InfiniteScroller from '../components/InfiniteScroller'
import Landingpage from '../components/Landingpage'
import ProfileComp from '../components/ProfileComp'
import JobComponent from '../components/JobComponent'
import QuestionsComponent from '../components/QuestionsComponent'

function Home() {
  return (
    <div className='w-full flex flex-col items-center   pt-14'>
      <Loop/>
      <InfiniteScroller/>
      <Landingpage/>
      <ProfileComp/>
      <JobComponent/>
      <QuestionsComponent/>

    </div>
  )
}

export default Home