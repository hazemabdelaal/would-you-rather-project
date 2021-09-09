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
    <div className="flex justify-center items-center h-screen border-2 text-center">
      <div className="flex flex-col justify-between h-2/4 items-center m-5 m-2/4">
        <div className="flex flex-col justify-between items-center">
          <p className="text-2xl lg:text-4xl font-bold text-main">
            Ready to play Would You Rather?
          </p>
          <img
            src="/images/wyr.jpg"
            alt="logo"
            className="h-28 w-28 mx-auto my-5 lg:h-40 lg:w-40 lg:my-10"
          />
        </div>
        <div className="border-8 border-main py-5 px-10 w-full rounded-xl">
          <div className="flex flex-col justify-between items-center">
            <p className="text-xl font-semibold lg:text-2xl">Select a User</p>
            <img
              src="/images/search.jpg"
              alt="avatar"
              className="h-14 w-14 rounded-full mx-auto my-2 lg:h-20 lg:w-20 lg:my-4"
            />
            <select
              className="text-center text-lg lg:text-2xl"
              onChange={selectAuthedUser}
              onSubmit={handleSelection}
            >
              <option value="0">Select</option>
              <option>sarahedo</option>
              <option>tylermcginnis</option>
              <option>johndoe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
