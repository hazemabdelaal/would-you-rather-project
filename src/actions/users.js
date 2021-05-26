import * as actions from './actionTypes';

export const getUsers = users => ({
  type: actions.GET_USERS,
  users,
});
