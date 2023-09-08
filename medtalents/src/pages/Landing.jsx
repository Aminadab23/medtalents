import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Welcome from '../components/welcome'
import Video from '../components/video'
import Stepsection from '../components/stepsSection'
import OurPartners from './OurPartners'
import Thrustedby from '../components/thrustedBy'
import Feature from '../components/Features'

const Landing = () => {
  return (

    <div>
    <NavBar />
    <Welcome />
    <Stepsection/>
    <Video />
    <Thrustedby />
    <Feature />
    
    </div>

  
   
  )
}

export default Landing;