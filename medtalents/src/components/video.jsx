 const Video = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"  >
        <div className="p-8 rounded shadow-2xl sm:p-10" data-aos="fade-up" data-aos-duration="7000" data-aos-easing="linear">
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 " >
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              How it works?
              
              
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            For a clear and straightforward process, follow these step-by-step instructions
             to create an account and complete your profile. We're here to guide you along the way,
              ensuring a seamless experience as you set up your account and provide essential information. 
            Start building your profile today and unlock new opportunities!
            </p>
          </div>
          
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
        </div>
      </div>
    );
  };
  export default Video;