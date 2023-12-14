import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? 'bg-white shadow-lg' : 'bg-transparent';

  return (
    <nav className={`fixed w-full ${navbarClass} p-4`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-black font-semibold hover:underline">Logo</Link>
        <div className="lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="block text-black focus:outline-none"
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
        <ul className={`lg:flex ${showMenu ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          <li>
            <Link to="/" className="block lg:inline-block lg:mt-0 text-black font-semibold hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="block lg:inline-block lg:mt-0 text-black font-semibold hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block lg:inline-block lg:mt-0 text-black font-semibold hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" className="block lg:inline-block lg:mt-0 text-black font-semibold hover:underline">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
