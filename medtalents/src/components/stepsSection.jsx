import Step from "./steps"; 
 
 
 const Stepsection = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="fade-up" data-aos-duration="9000" data-aos-easing="ease-in">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Get</span>
            </span>{' '}
             ready to pursue your dream job
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Discover your dream job by creating an account and following our simple steps. Unleash the power of
           our platform, connecting you to tailored opportunities and a supportive community.
           Let's embark on this transformative journey together towards the career you've always envisioned.
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <Step
          Number="1" 
          Name="Sign Up"
          Exp="Bro ipsum dolor sit amet gaper backside single track, manny Bike
          epic clipless."
              />
            
             <Step
          Number="2" 
          Name="Complete Your profile"
          Exp="Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
              flail 180 berm."
             />
              <Step
          Number="3" 
          Name="Find a job"
          Exp="Bro ipsum dolor sit amet gaper backside single track, manny Bike
  epic clipless."
             />
        </div>
      </div>
    );
  };
  export default Stepsection;