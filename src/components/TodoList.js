import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index)=> {
        return <Todo key={`todo-${todo.id}`} todo={todo}/>
      })
      : "No todos, yay!"
    }
  </ul>
) 

/* store에 있는 todo item들 가져와야함
- mapStateToProps 함수는 store의 state가 변경될 때 마다 호출된다.
- store에 있는 모든 state 다 가져옴. 
- 이 컴포넌트에서 필요한 데이터를 리턴해야함 
 */ 

const mapStateToProps = state => { 
  const { byIds, allIds } = state.todos || {}; 
  const todos = 
    allIds && allIds.length 
    ? allIds.map(id => (byIds ? { ...byIds[id], id}: null)) // 이게 뭔뜻 
    : null;
    return { todos };
}

export default connect(mapStateToProps)(TodoList);