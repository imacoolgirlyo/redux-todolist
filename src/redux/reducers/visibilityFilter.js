/* 
 reducer 에게 필요한 건 
 1. 어떤 Action인지? 
 2. state 어떻게 변경할 건지 ? 
 */ 

import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTERS } from "../../constants"; 
// 왜 굳이 constanst를 만들어야 할까 ? 

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
  
    default: {
      return state;
    }
  }
}

export default visibilityFilter;