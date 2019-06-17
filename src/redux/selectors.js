/*
셀렉터는 무슨 역할..? 어디에 쓰임 
  getTodoList는 todos 스토어에 있는 allIds를 리턴 
  getTodoById는 주어진 id로 store에 있는 todo 찾음 
  getTodos 는 allIds에서 모든 id를 가져와서 byIds로 여러 todo 찾아서 
  최종 array 리턴 
  getTodosByVisibilityFilter 는 visibility filter로 투두 filter 
 */

 export const getTodoList = store => 
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) => 
  store && store.todos && store.todos.byIds 
  ? {...store.todos.byIds[id], id}
  : {}; 

export const getTodos = store => 
  getTodoList(store).map(id => getTodoById(store, id));