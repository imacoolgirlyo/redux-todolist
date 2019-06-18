/* reducer와 액션, 액션 타입에 따라 state 어떻게 변경할지 적기  */ 
import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
}

/*
this.state = {
  allIds : [1,2,3,4...] // id만 있음 
  byIds : {
    1 : {
      content : 놀기,
      completed : false
    },
    ...
  }
}
 */

export default function(state= initialState, action){
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return{
        ...state,
        allIds:[...state.allIds, id], 
        byIds : {
          ...state.byIds,
          [id]: {
            content,
            completed:false
          }
        }
      };
    }
    /*
this.state = {
  allIds : [1,2,3,4...] // id만 있음 
  byIds : {
    1 : {
      content : 놀기,
      completed : false
    },
    ...
  }
}
 */
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          // byIds[id]인 애의 completed 변경 
          ...state.byIds, // 이렇게 하면 전체 복사되고, [id]하면 저것만 변경 되는건가?
          [id] : {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      }
    }
  
    default: 
      return state;
  }
}
