import * as types from '../actions/action-types';

export function loadSearchLayout(searchType, title) {
  return {
    type: types.LOAD_SEARCH_LAYOUT,
    searchType,
    title
  };
}

export function loadSearchLayout_(searchType, title) {
  return function (dispatch) {
    dispatch(function(){
      return{
        type: types.LOAD_SEARCH_LAYOUT,
        searchType,
        title
      };
    });
  }
  
}
