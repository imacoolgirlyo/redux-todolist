import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index)=> {
        return <Todo key={`todo-${todos.id}`} todo={todo}/>
      })
      : "No todos, yay!"
    }
  </ul>
)

export default TodoList;