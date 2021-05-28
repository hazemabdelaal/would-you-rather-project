import { getQuestions, saveQuestion, saveQuestionAnswer } from './questions';
import { getUsers } from './users';
import { getInitialData } from '../utils/apis';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

export const handleInitialData = () => dispatch =>
  getInitialData().then(({ users, questions }) => {
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
  });

export const handleSaveQuestion = question => dispatch =>
  _saveQuestion(question).then(ques => {
    dispatch(saveQuestion(ques));
  });

export const handleAnswerQuestion = info => dispatch => {
  return _saveQuestionAnswer(info).then(() => {
    dispatch(saveQuestionAnswer(info));
  });
};
