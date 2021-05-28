import * as actions from '../actions/actionTypes';

const questions = (state = {}, action) => {
  if (action.type === actions.GET_QUESTIONS) {
    return {
      ...state,
      ...action.questions,
    };
  } else if (action.type === actions.SAVE_QUESTION) {
    return {
      ...state,
      [action.question.id]: action.question,
    };
  } else if (action.type === actions.SAVE_QUESTION_ANSWER) {
    return {
      ...state,
      [action.info.qid]: {
        ...state[action.info.qid],
        [action.info.answer]: {
          ...state[action.info.qid][action.info.answer],
          votes: state[action.info.qid][action.info.answer].votes.concat([
            action.info.authedUser,
          ]),
        },
      },
    };
  }

  return state;
};

export default questions;
