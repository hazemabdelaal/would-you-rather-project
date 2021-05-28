import * as actions from './actionTypes';

export const getUsers = users => ({
  type: actions.GET_USERS,
  users,
});

export const saveUserQuestion = (authedUser, qid) => ({
  type: actions.SAVE_USER_QUESTION,
  authedUser,
  qid,
});

export const saveUserQuestionAnswer = (authedUser, qid, option) => ({
  type: actions.SAVE_USER_QUESTION_ANSWER,
  authedUser,
  qid,
  option,
});
