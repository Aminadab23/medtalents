import React from 'react';

const SignupModal = ({ isOpen, onRequestClose }) => {
  const closeModal = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="relative bg-white max-w-xl p-10 rounded-md shadow-xl">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-center pb-10">Sign up for an account</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="text"
              name="fullName"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="email"
              name="email"
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="password"
              name="password"
              placeholder="******"
            />
          </div>
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="password"
              name="confirmPassword"
              placeholder="******"
            />
          </div>
          <div>
            <input
              className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
              type="submit"
              value="Sign Up"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-10">
          Already a member? <a href="#" className="text-[#4F46E5] font-bold">Log in here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;