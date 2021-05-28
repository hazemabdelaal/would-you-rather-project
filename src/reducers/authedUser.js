import * as actions from '../actions/actionTypes';

const authedUser = (state = null, action) => {
  if (action.type === actions.GET_AUTHED_USER) {
    return action.id;
  }
  if (action.type === actions.CLEAR_AUTHED_USER) {
    return null;
  }

  return state;
};

export default authedUser;
