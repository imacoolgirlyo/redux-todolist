/* 
Reducer : 스토어에 있는 state를 변경해주기 위해 reducer에게 액션을 보냄 
- todos 리듀서 : 받은 action의 id를 allids 필드에 추가한다.
또한 byIds를 통해 todo의 구조를 정해줄 수 있음. 여기서는 complted : false 
- visibilityFilters 리듀서 : 받은 action의 filter 이름을 가져와서 set 함
*/

import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';

export default combineReducers({ todos, visibilityFilter });