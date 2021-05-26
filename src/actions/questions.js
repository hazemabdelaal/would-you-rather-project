import * as actions from './actionTypes';

export const getQuestions = questions => ({
  type: actions.GET_QUESTIONS,
  questions,
});
