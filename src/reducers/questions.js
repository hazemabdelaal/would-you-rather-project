import * as actions from '../actions/actionTypes';

const questions = (state = {}, action) => {
  if (action.type === actions.GET_QUESTIONS) {
    return {
      ...state,
      ...action.questions,
    };
  }
  return state;
};

export default questions;
