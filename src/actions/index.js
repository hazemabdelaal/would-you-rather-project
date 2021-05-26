import { getQuestions } from './questions';
import { getUsers } from './users';
import { getInitialData } from '../utils/apis';

export const handleInitialData = () => dispatch =>
  getInitialData().then(({ users, questions }) => {
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
  });
