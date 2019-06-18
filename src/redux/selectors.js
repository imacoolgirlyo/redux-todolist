/*
셀렉터는 무슨 역할..? 어디에 쓰임 
  getTodoList는 todos 스토어에 있는 allIds를 리턴 
  getTodoById는 주어진 id로 store에 있는 todo 찾음 
  getTodos 는 allIds에서 모든 id를 가져와서 byIds로 여러 todo 찾아서 
  최종 array 리턴 
  getTodosByVisibilityFilter 는 visibility filter로 투두 filter 
 */
 import { VISIBILITY_FILTERS } from '../constants';

 export const getTodoList = store => 
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) => 
  store && store.todos && store.todos.byIds 
  // 아직 이런 조건을 어떻게 만들어야할지 모르겠음. 기준이 뭐지? 
  ? {...store.todos.byIds[id], id}
  : {}; 

export const getTodos = store => 
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
}