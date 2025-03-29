import React, { useState } from "react";
import { Link } from "react-router-dom";
import artgenie_logo from "../assets/artgenie_logo.png";

const Navbar = () => {
  const [user, setUser] = useState(true);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-cyan-50 navbar font-krona bg-gradient-to-r from-white via-cyan-200 to-cyan-300">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={artgenie_logo}
              alt="Logo"
              className="w-8 h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
            />
          </div>

          {/* Navigation Links */}
          <div>
            {user ? (
              <div className="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4 font-bold text-gray-700">
                {/* Add links or buttons here for logged-in users */}
              </div>
            ) : (
              <div>
                {/* Add login/signup buttons here for guests */}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
