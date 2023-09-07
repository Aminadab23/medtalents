import React from 'react';

const LoginModal = ({ isOpen, onRequestClose }) => {
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
        <h1 className="text-xl font-bold text-center pb-10">Sign in to your account</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="email"
              name="email"
              placeholder="example@medstore.et"
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
          <div className="flex">
            <div className="w-1/2">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="w-1/2">
              <a className="font-bold text-blue-600" href="">
                Forgot password ?
              </a>
            </div>
          </div>
          <div>
            <input
              className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
              type="submit"
              value="Login"
            />
          </div>
          <div>
            <p className="text-center">Or continue with</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">
              Linkedin
            </button>
            <button className="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">
              Google
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default LoginModal;