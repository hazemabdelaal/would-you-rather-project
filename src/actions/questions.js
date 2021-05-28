import * as actions from './actionTypes';

export const getQuestions = questions => ({
  type: actions.GET_QUESTIONS,
  questions,
});

export const saveQuestion = question => ({
  type: actions.SAVE_QUESTION,
  question,
});

export const saveQuestionAnswer = info => ({
  type: actions.SAVE_QUESTION_ANSWER,
  info,
});
