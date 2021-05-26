import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  }, []);

  return (
    <Router>
      <NavBar />
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/ask-question" component={AskQuestion} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/error" component={Error} />
      </div>
    </Router>
  );
}

export default App;
