import React from 'react';

const JobsList = () => {
  const jobslist = [
    {
      jobTitle: 'Collect Requirements',
      jobdescripton:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rationeim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam',
    },
    {
      jobTitle: 'Refine the Requirements',
      jobdescripton:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rationeim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam',
    },
  ];

  return (
    <>
      <div className="block py-20">
        {jobslist.map((j) => {
          return (
            <div
              key={j.jobTitle}
              className="max-w-6xl mx-auto flex flex-col gap-10 px-5"
            >
              <div className="flex flex-col md:flex-row bg-white rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
                <div className="flex justify-center md:justify-end">
                  <div className="w-[120px] h-[120px] bg-white shadow-lg rounded-xl p-4 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-14 h-14 text-blue-950"
                    >
                      <path
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-md my-2 p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50 relative">
                  <h1 className="font-bold text-xl pb-4">{j.jobTitle}</h1>
                  <p>{j.jobdescripton}</p>
                  <button className="absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JobsList;