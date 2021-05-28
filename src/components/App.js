import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';
import NavBar from './NavBar';
import Login from './Login';
import Home from './Home';
import AskQuestion from './AskQuestion';
import Leaderboard from './Leaderboard';
import QuestionDetails from './QuestionDetails';
import Error from './Error';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoading());
    dispatch(handleInitialData()).then(() => dispatch(hideLoading()));
  }, [dispatch]);

  const authedUser = useSelector(state => state.authedUser);

  return (
    <Router>
      <LoadingBar />
      <NavBar />
      {authedUser === null ? (
        <Route component={Login} />
      ) : (
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AskQuestion} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/questions/:id" component={QuestionDetails} />
          <Route exact path="/error" component={Error} />
        </div>
      )}
    </Router>
  );
}

export default App;
