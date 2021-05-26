import * as actions from './actionTypes';

export const getAuthedUser = id => ({
  type: actions.GET_AUTHED_USER,
  id,
});
