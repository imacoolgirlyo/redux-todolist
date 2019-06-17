/* 
Action Creators (액션 생성자) : 
view가 action을 요청하면 액션 생성자에서 요청한 action을 만듦
- 어떤 action을 만들고 어떤 값을 전달해 줄지 생각 
- ex. 버튼 클릭하는 액션, 해당 버튼의 id 전달 

어떤 action이 있어야 할까? 
- user가 Todo를 추가 : addTodo
투두를 추가하기 위한 action을 만든다. content(내용)을 받고, 
payload로 content와 id를 포함하는 action을 리턴한다. 
- user가 Todo를 토클 (completed, incomplete) : toggleTodo
투두를 토클하기 위한 action을 만든다. 해당 todo의 id를 받고, 그것을 payload
로 하여 Action toggleTodo를 리턴
- user가 filter를 선택 : 선택한 filter이름을 받아서 payload로 filter 하
는 액샨 리턴  
*/

import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0; 

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
})