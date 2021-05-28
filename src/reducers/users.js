import * as actions from '../actions/actionTypes';

const users = (state = {}, action) => {
  if (action.type === actions.GET_USERS) {
    return {
      ...state,
      ...action.users,
    };
  } else if (action.type === actions.SAVE_QUESTION) {
    return {
      ...state,
      [action.question.author]: {
        ...state[action.question.author],
        questions: state[action.question.author].questions.concat([
          action.question,
        ]),
      },
    };
  } else if (action.type === actions.SAVE_QUESTION_ANSWER) {
    return {
      ...state,
      [action.info.authedUser]: {
        ...state[action.info.authedUser],
        answers: {
          ...state[action.info.authedUser].answers,
          [action.info.qid]: action.info.answer,
        },
      },
    };
  }

  return state;
};

export default users;
