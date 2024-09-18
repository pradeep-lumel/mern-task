import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          MyWebsite
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/employee-list'>Employee List</Link>
          </li>
          <li>
              Nivethaa
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
