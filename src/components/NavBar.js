import React from 'react';

const NavBar = () => {
  return (
    <div className="text-xl bg-gray-400 leading-10">
      <div className="flex justify-between mx-auto w-4/6">
        <div className="flex justify-around">
          <button className="mx-3">Home</button>
          <button className="mx-3">Ask Question</button>
          <button className="mx-3">Leaderboard</button>
        </div>
        <div className="flex justify-between my-2">
          <p className="mx-3">Hello, Hazem</p>
          <button className="mx-3 px-2 bg-gray-500 rounded hover:bg-gray-600 text-gray-100">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
