import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

import car from '../../Images/car.png'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="shadow sticky z-50 top-0 custom-font">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 banner">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          <div className="flex items-center">
          <Link to="/">
            <h1 className="poetsen-one-regular flex">BearWolf 
            <img src={car} alt='car icon' className='car' />
            <span>Detailing</span>
            </h1>
          </Link>

          {/* Mobile Menu Toggle Button */} 
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center px-2 py-1 text-gray-500 hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-grow justify-center nav-links-container">
            <ul className="flex flex-row font-medium space-x-8 roboto-bold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-black-700" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <Link
                  to="/service"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-black-700" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                to='/portfolio'
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-black-700" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
           className={`lg:hidden fixed top-0 right-0 bg-white z-40 transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            width: '50%', // Set width to 50%
            height: '100vh'
          }}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-center mt-8 space-y-6">
            <li>
              <NavLink
                to="/"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-black-700" : "text-gray-700"} hover:text-orange-700`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="service"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-black-700" : "text-gray-700"} hover:text-orange-700`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-black-700" : "text-gray-700"} hover:text-orange-700`
                }
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header