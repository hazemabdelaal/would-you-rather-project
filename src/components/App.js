import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Home from './Home';
import AskQuestion from './AskQuestion';
import Leaderboard from './Leaderboard';
import Error from './Error';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const authedUser = useSelector(state => state.authedUser);

  return (
    <Router>
      <NavBar />
      {authedUser === null ? (
        <Route component={Login} />
      ) : (
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/ask-question" component={AskQuestion} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/error" component={Error} />
        </div>
      )}
    </Router>
  );
}

export default App;
