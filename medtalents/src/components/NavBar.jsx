import { useState } from 'react';
import logo from '../assets/medstore.png';
import Modal from '../components/LoginModal';
import SignModal from '../components/SignupModal'
import {NavLink}  from 'react-router-dom'
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [isSignOpen,setIsSignOpen]= useState(false)
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
const openSign= ()=>{
  setIsSignOpen(!isSignOpen)
}
const closeSignupModal = () => {
  setIsSignOpen(false);
};
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <strong>Medstore.et</strong>
              <i> talents</i>
            </span>
         </NavLink>

          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to='/jobs'
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Jobs
                </NavLink>
              </li>
              <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          onClick={openModal}
        >
          Login
        </a>
      </li>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        
      </Modal>
            </ul>
            <div className="flex items-center ml-6 lg:order-2">
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={openSign} >
                Sign up
              </a>
            <SignModal isOpen={isSignOpen} onRequestClose={closeSignupModal}></SignModal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;