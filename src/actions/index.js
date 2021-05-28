import { getQuestions, saveQuestion, saveQuestionAnswer } from './questions';
import { getUsers, saveUserQuestion, saveUserQuestionAnswer } from './users';
import { getInitialData } from '../utils/apis';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const handleInitialData = () => dispatch =>
  getInitialData().then(({ users, questions }) => {
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
  });

export const handleSaveQuestion = question => (dispatch, getState) => {
  dispatch(showLoading());
  const { authedUser } = getState();

  return _saveQuestion(question).then(ques => {
    dispatch(saveQuestion(ques));
    dispatch(saveUserQuestion(authedUser, ques.id));
    dispatch(hideLoading());
  });
};

export const handleAnswerQuestion = info => dispatch => {
  dispatch(showLoading());
  return _saveQuestionAnswer(info).then(() => {
    dispatch(saveQuestionAnswer(info));
    dispatch(saveUserQuestionAnswer(info));
    dispatch(hideLoading());
  });
};
