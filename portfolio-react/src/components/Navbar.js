import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-lg p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white font-semibold hover:underline">
          Rafael Quinteros
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="block text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`lg:flex ${showMenu ? 'block' : 'hidden'} mt-4 lg:mt-0`}
        >
          <li>
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2"
              onClick={() => { closeMenu(); document.getElementById('service-section').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2"
              onClick={() => { closeMenu(); document.getElementById('cardlist-section').scrollIntoView({ behavior: 'smooth' }); }}
            >
              CardList
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2"
              onClick={() => { closeMenu(); document.getElementById('references-section').scrollIntoView({ behavior: 'smooth' }); }}
            >
              References
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2"
              onClick={() => { closeMenu(); document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2"
              onClick={() => { closeMenu(); document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

