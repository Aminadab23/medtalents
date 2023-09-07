import JobsList from "../components/JobsList"
import SearchJob from "../components/SearchJob"

const Jobs = () => {
  return (
    <>
    <div className='flex justify-center text-8xl'>
        Jobs on post
    </div>
    <div className='flex space-x-5 mb-14 mt-10 mx-8'>
<SearchJob />


<JobsList />

    </div>
    </>
  )
}

export default Jobs