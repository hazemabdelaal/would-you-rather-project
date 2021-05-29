import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { getAuthedUser } from '../actions/authedUser';
import Home from './Home';

const Login = props => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const selectAuthedUser = e => {
    dispatch(getAuthedUser(e.target.value));
    setRedirect(true);
  };

  const handleSelection = () => <Route component={Home} />;

  const { from } = props.location.state || { from: { pathname: '/' } };

  if (redirect) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <p className="text-center text-3xl font-bold text-gray-500 mt-20">
        Welcome to Would You Rather
      </p>
      <img
        src="/images/wyr.jpg"
        alt="logo"
        className="h-40 w-40 mb-4 mx-auto mt-10"
      />
      <div className="container border-8 border-gray-400 w-96 mt-10 mx-auto p-10 rounded-lg">
        <div className="flex flex-col items-center justify-between">
          <p className="text-center text-3xl font-bold text-gray-500 mb-4">
            Select a User
          </p>
          <img
            src="/images/search.jpg"
            alt="avatar"
            className="h-20 w-20 rounded-full"
          />
          <select
            className="m-4 w-40 bg-gray-200 border-4 border-gray-400 focus:outline-none text-xl"
            onChange={selectAuthedUser}
            onSubmit={handleSelection}
          >
            <option value="0">Select a user</option>
            <option>sarahedo</option>
            <option>tylermcginnis</option>
            <option>johndoe</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
