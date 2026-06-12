import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-orange-500 shadow-sm">
      <div className="navbar py-10 w-11/12 mx-auto">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
            <Link to="" className="hover:text-gray-200">
            <a>Save More On App </a>
          </Link>
            <Link to="/become-seller" className="hover:text-gray-200">
            <a>Became A Seller</a>
          </Link>
            <Link to="/help-support" className="hover:text-gray-200">
            <a>Help & Support</a>
          </Link>
            <Link to="/login" className="hover:text-gray-200">
            <a>Log In</a>
          </Link>
            <Link to="/register" className="hover:text-gray-200">
            <a>Sign Up</a>
          </Link>
        
          <Link to="" className="hover:text-gray-200">
            <a>Language</a>
          </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {/* <img className="h-8 w-8" src={logo} alt="Logo" /> */}
          <span className="lg:text-3xl text-xl text-white"><IoLogoDesignernews /></span>
          <p className="text-2xl font-bold text-white">Zarad</p>
        </div>


        {/* Search Input */}
        <div className="flex items-center gap-4 lg:ml-20 ml-2">
            <input  type="text" placeholder="Search in Zarad" className="input input-bordered w-40 lg:w-120 h-10 focus:outline-none focus:ring-blue-500" />

            <Link to="/cart" className="btn"><FaShoppingCart /></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-white">
            <Link to="" className="hover:text-gray-200">
            <a>Save More On App </a>
          </Link>
            <Link to="/become-seller" className="hover:text-gray-200">
            <a>Became A Seller</a>
          </Link>
            <Link to="/help-support" className="hover:text-gray-200">
            <a>Help & Support</a>
          </Link>
            <Link to="/login" className="hover:text-gray-200">
            <a>Log In</a>
          </Link>
            <Link to="/register" className="hover:text-gray-200">
            <a>Sign Up</a>
          </Link>
        
          <Link to="" className="hover:text-gray-200">
            <a>Language</a>
          </Link>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
