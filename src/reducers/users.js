import * as actions from '../actions/actionTypes';

const users = (state = {}, action) => {
  if (action.type === actions.GET_USERS) {
    return {
      ...state,
      ...action.users,
    };
  }
  return state;
};

export default users;
