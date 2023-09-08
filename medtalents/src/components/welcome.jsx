 const Welcome = () => {
    return (
      <div className="relative bg-blue-500">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Welcome to the captivating 
              <br className="hidden md:block" />
              world of{' '}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900">Medstore Talents</span>
              </span>  
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>
        
            <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
              
            </p>
            <div  className="flex justify-center gap-5" >
            <button type="button" className="text-blue-400 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-6 py-2 text-center shadow-xl hover:shadow-2xl  " data-aos="fade-right" data-aos-duration="9000" data-aos-easing="ease-in" data-aos-delay="300">Sign up</button>
            <button type="button" className="text-white bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-6 py-2 text-center shadow-xl hover:shadow-2xl " data-aos="fade-left" data-aos-duration="9000" data-aos-easing="ease-in" data-aos-delay="300">Login</button>

            </div> 
            
             
            
          </div>
        </div>
      </div>
    );
  };

  export default Welcome;