import * as actions from '../actions/actionTypes';

const authedUser = (state = null, action) => {
  if (action.type === actions.GET_AUTHED_USER) {
    return action.id;
  }
  return state;
};

export default authedUser;
