import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="text-xl bg-gray-400 leading-10">
      <div className="flex justify-between items-center mx-auto w-4/6">
        <div className="flex justify-around">
          <Link to="/" className="mx-3 focus:outline-none">
            Home
          </Link>
          <Link to="/ask-question" className="mx-3 focus:outline-none">
            Ask Question
          </Link>
          <Link to="/leaderboard" className="mx-3 focus:outline-none">
            Leaderboard
          </Link>
        </div>
        <div className="flex justify-between my-2">
          <p className="mx-3">Hello, Hazem</p>
          <button className="mx-3 px-2 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 focus:outline-none">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
