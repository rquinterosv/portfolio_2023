import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full bg-black shadow-lg p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white font-semibold hover:underline">Rafael Quinteros</Link>
        <div className="lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="block text-white focus:outline-none">
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
        <ul className={`lg:flex ${showMenu ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          <li>
            <Link to="/" className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/workexp" className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2">
              Work Experience
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="block lg:inline-block lg:mt-0 text-white font-semibold hover:underline p-2">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
