import React from 'react';
import Store from '../reducer/Store';

let nextTodoId = 0;
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          Store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: nextTodoId++
          });
        }}>
          Add Todo
        </button>

        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default TodoApp;