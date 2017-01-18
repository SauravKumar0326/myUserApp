import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  users: [],
  page: 1,
  sort: {field: "name",dir:"asc" },
  userProfile: {
    repos: []
  }
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });
    case types.SET_USER_SORT:
      return Object.assign({}, state, { sort: action.obj_order });

    case types.DELETE_USER_SUCCESS:

      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(state.users, user => user.id != action.userId);
      return Object.assign({}, state, { users: newUsers });

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

  }

  return state;

}

export default userReducer;
