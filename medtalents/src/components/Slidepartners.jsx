import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import logo from '../assets/medstore.png'
import log2 from '../assets/heroimage.png'
const SlidingPartners = () => {
  const companies = [
    {
      compLogo: logo,
      compName: 'Company One',
      compDesc: 'Two years with Medstore',
    },
    {
      compLogo: log2,
      compName: 'Company Two',
      compDesc: 'Three years with Medstore',
    },
    // Add more company objects as needed
  ];

  return (
    <>
      <div className="flex justify-start">
        <strong>Our partners</strong>
      </div>

      <Carousel
        autoPlay
        interval={5000} // Slide duration for each element (5 seconds)
        infiniteLoop
        showStatus={false}
        showThumbs={false}
      >
        {companies.map((comp, index) => (
          <div key={index} className="flex h-96 w-96 px-4 relative group">
            <div
              className="flex justify-between w-full h-full rounded-2xl bg-center bg-cover duration-500"
              style={{ backgroundImage: `url(${comp.compLogo})` }}
            >
              <div className="hidden group-hover:absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={30} />
              </div>

              <div className="hidden group-hover:absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight size={30} className="text-black" />
              </div>
              <div className="m-auto absolute bottom-0 left-0 right-0 bg-white p-4">
              <strong>{comp.compName}</strong>
              <p>{comp.compDesc}</p>
            </div>
            </div>
            
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SlidingPartners;