import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import artgenie_logo from "../assets/artgenie_logo.png";
import credit_star from "../assets/credit_star.svg";
import profile_icon from "../assets/profile_icon.png";

const Navbar = () => {
  const { user, setUser, showDropdown, setShowDropdown } = useContext(AppContext);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-md bg-gradient-to-r from-white via-cyan-200 to-cyan-300">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={artgenie_logo}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700">
            {user ? (
              <>
                <button className="flex items-center space-x-2 border-2 border-white rounded-3xl px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 hover:shadow-lg shadow-cyan-500/50">
                  <img src={credit_star} alt="star_icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Credit: 50</span>
                </button>

                {/* User Profile Button */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    className="flex items-center space-x-2 border-2 border-white rounded-3xl px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 hover:shadow-lg shadow-cyan-500/50"
                  >
                    <img src={profile_icon} alt="profile_icon" className="w-4 h-4 sm:w-4 sm:h-4" />
                    <span>Hi! Maneesha</span>
                  </button>

                  {/* Logout Dropdown */}
                  {showDropdown && (
                    <div 
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                      className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-xl"
                    >
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-cyan-100"
                        onClick={() => setUser(false)}
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button className="flex items-center space-x-2 border-2 border-white rounded-3xl px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2">
                <img src={profile_icon} alt="profile_icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Sign Up</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
