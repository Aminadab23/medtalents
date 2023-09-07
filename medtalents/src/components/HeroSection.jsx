import CustomeButton from './CustomeButton'
import v from '../assets/intro.mp4'
const HeroSection = () => {
    
  return (
    <>
    
    <div className="md:flex justify-between space-x-8 m-8">
<div className='mt-12'>
<video controls className='w-96 h-72'>
        <source src={v} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</div>
<div className='w-96 h-96 ml-24 mt-12'>
   
<div className="text-reveal overflow-hidden">
      <span className="text-reveal__animation">
       <strong> Medstore.et </strong> <strong className="text-reveal__strong">Talents</strong>
      </span>
    </div>
      <p>    Where u meet your future home.
    </p>
    <CustomeButton  title="Sign in" />
</div>
    </div>
    </>
  )
}


export default HeroSection