import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthedUser } from '../actions/authedUser';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const authedUser = useSelector(state => state.authedUser);
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearAuthedUser());
  };

  return (
    <div>
      {authedUser && (
        <div className="text-xl bg-gray-400 leading-10">
          <div className="flex justify-between items-center mx-auto w-screen">
            <div className="flex justify-around ml-80">
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
            <div className="flex justify-between items-center my-2 mr-80">
              <img
                src={users[authedUser].avatarURL}
                alt="avatar"
                className="h-10 w-10 rounded-full"
              />
              <p className="mx-3">Hello, {authedUser}</p>
              <button
                className="mx-3 px-2 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 focus:outline-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
