import * as types from '../actions/action-types';
import store from '../store';
import axios from 'axios';

export function fetchUsers(q,selctedColoumn,Order) {
  console.log(store.getState());
  console.log(selctedColoumn);
  console.log(Order);
  let order_obj = {};
  if(q && q.target ){
    let target = q.target;
    var str_sort = "";
    if(q.target.getAttribute("data-target")){
      order_obj.field = q.target.getAttribute("data-target");
      order_obj.dir = q.target.getAttribute("data-sort-order");
      order_obj.dir = order_obj.dir ? order_obj.dir : "asc";
      str_sort='sort_by='+order_obj.field+'&sort_dir='+order_obj.field;
      order_obj.dir = order_obj.dir == "asc"?"desc":"asc";
    }
  }
  return function (dispatch) {
    var URL="../../data/users.json";
    if(order_obj.dir == "asc")
     var URL="../../data/documents.json";
    axios.get(URL)
      .then(response => {
        console.log('url='+URL);
        console.log(response.data);
          dispatch(setUsers(response.data));
          if(order_obj.field && order_obj.dir){
            dispatch(setUserSort(order_obj));
         }
        // return response;
      });
  }
}

export function setUsers(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function setUserSort(obj_order) {
  console.log("obj_order:"+obj_order);
  return {
    type: types.SET_USER_SORT,
    obj_order
  };
}

// export function getUsersSuccess(users) {
//   return {
//     type: types.GET_USERS_SUCCESS,
//     users
//   };
// }

export function deleteUserSuccess(userId) {
  return {
    type: types.DELETE_USER_SUCCESS,
    userId
  };
}

export function userProfileSuccess(userProfile) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile
  };
}
