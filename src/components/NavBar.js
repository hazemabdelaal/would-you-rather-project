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
    <div className="bg-main">
      <div className="mx-5">
        {authedUser && (
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center px-5 text-secondary text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/add" className="mx-5">
                Ask
              </Link>
              <Link to="/leaderboard" className="">
                Leaderboard
              </Link>
            </div>
            <div className="flex flex-between items-center text-lg md:text-xl font-semibold lg:text-2xl xl:text-3xl">
              <img
                src={users[authedUser].avatarURL}
                alt="avatar"
                className="h-10 w-10 rounded-full hidden sm:block xl:h-16 xl:w-16"
              />
              <p className="mx-3 text-secondary hidden sm:block">
                Hello, {authedUser}
              </p>
              <Link
                to="/"
                className="border-2 px-2 py-1 my-3 border-red rounded-xl hover:bg-red text-secondary"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
